"use client";
import {demoApplications,readDemoApplications,saveDemoStatus} from "../lib/demo-applications";
import ImageLibrary from "./image-library";
import type { MediaImage } from "../lib/media-types";
import SectionEditor from "./section-editor";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  type Program,
  type ContentPage,
  type Enrollment,
  seedPrograms,
  statusLabel,
  money,
  enrollmentLabel,
} from "../lib/program-data";
type ConsoleResponse = {
  error?: string;
  programs: Program[];
  program: Program;
  pages: ContentPage[];
  page: ContentPage;
  enrollments: Enrollment[];
  user: { admin: boolean } | null;
};
const sections = [
  ["programs", "프로그램"],
  ["applications", "신청 관리"],
  ["content", "콘텐츠"],
  ["images", "이미지 관리"],
  ["settings", "운영 설정"],
] as const;
type Section = (typeof sections)[number][0];
async function api(url: string, method = "GET", body?: unknown) {
  const r = await fetch(url, {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const d = (await r.json()) as ConsoleResponse;
  if (!r.ok) throw new Error(d.error || "요청을 처리하지 못했습니다.");
  return d;
}
export default function AdminConsole({
  preview = false,
}: {
  preview?: boolean;
}) {
  const [access, setAccess] = useState<"loading" | "granted" | "denied">(
      preview ? "granted" : "loading",
    ),
    [section, setSection] = useState<Section>("programs"),
    [programs, setPrograms] = useState<Program[]>(preview ? seedPrograms : []),
    [pages, setPages] = useState<ContentPage[]>([]),
    [applications, setApplications] = useState<Enrollment[]>(preview ? demoApplications : []),
    [editing, setEditing] = useState<Program | null>(null),
    [pageEditing, setPageEditing] = useState<ContentPage | null>(null),
    [message, setMessage] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [filter, setFilter] = useState("all");
  const [images,setImages]=useState<MediaImage[]>([]);
  const [imageBusy,setImageBusy]=useState(false);
  async function reload() {
    setError("");
    try {
      const [p, c, a] = await Promise.all([
        api("/api/admin/programs"),
        api("/api/admin/pages"),
        api("/api/admin/applications"),
      ]);
      setPrograms(p.programs);
      setPages(c.pages);
      setApplications(a.enrollments);
    } catch (e) {
      setError((e as Error).message);
    }
  }
  useEffect(() => {
    if (preview) {setApplications(readDemoApplications());return;}
    api("/api/auth/session")
      .then((d) => {
        setAccess(d.user?.admin ? "granted" : "denied");
        if (d.user?.admin) void reload();
      })
      .catch(() => {
        setAccess("denied");
        setError("로그인 정보를 불러오지 못했습니다.");
      });
  }, [preview]);
  function changeSection(s: Section) {
    setSection(s);
    setEditing(null);
    setPageEditing(null);
    setMessage("");
    setError("");
  }
  async function saveProgram(e: React.FormEvent) {
    e.preventDefault();
    if (preview || !editing) return;
    setBusy(true);
    setError("");
    try {
      const data = await api("/api/admin/programs", "POST", editing);
      setPrograms((old) =>
        [...old.filter((p) => p.id !== data.program.id), data.program].sort(
          (a, b) => a.order - b.order,
        ),
      );
      setEditing(null);
      setMessage(
        "프로그램을 저장했습니다. 리스트와 상세에 같은 내용이 반영됩니다.",
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function savePage(e: React.FormEvent) {
    e.preventDefault();
    if (preview || !pageEditing) return;
    setBusy(true);
    setError("");
    try {
      const d = await api("/api/admin/pages", "POST", pageEditing);
      setPages((old) => [d.page, ...old.filter((p) => p.id !== d.page.id)]);
      setPageEditing(null);
      setMessage(
        "콘텐츠를 저장했습니다. 공개 화면 연결은 다음 구축 단계에서 진행합니다.",
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function changeStatus(id: string, status: string) {
    if (preview) {try{saveDemoStatus(id,status as Enrollment["status"]);setApplications(readDemoApplications());setMessage("샘플 신청 상태를 변경했습니다. 마이페이지 미리보기에서도 확인할 수 있습니다.");}catch{setError("샘플 상태를 저장하지 못했습니다.");}return;}
    setBusy(true);
    setError("");
    try {
      await api("/api/admin/applications", "PATCH", { id, status });
      setApplications((old) =>
        old.map((x) =>
          x.id === id ? { ...x, status: status as Enrollment["status"] } : x,
        ),
      );
      setMessage("신청 상태를 변경했습니다. 회원의 마이페이지에 반영됩니다.");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  const field = (key: keyof Program, label: string, options?: string[]) =>
    editing && (
      <label key={key}>
        {label}
        {options ? (
          <select
            value={String(editing[key])}
            onChange={(e) => setEditing({ ...editing, [key]: e.target.value })}
          >
            {options.map((v) => (
              <option key={v} value={v}>
                {v in statusLabel
                  ? statusLabel[v as keyof typeof statusLabel]
                  : v}
              </option>
            ))}
          </select>
        ) : (
          <input
            required
            type={key === "price" || key === "order" ? "number" : "text"}
            min={0}
            value={String(editing[key])}
            onChange={(e) =>
              setEditing({
                ...editing,
                [key]:
                  key === "price" || key === "order"
                    ? Number(e.target.value)
                    : e.target.value,
              })
            }
          />
        )}
      </label>
    );
  const multiline = (key: keyof Program, label: string) =>
    editing && (
      <label key={key}>
        {label}
        <textarea
          required
          rows={4}
          value={
            Array.isArray(editing[key])
              ? (editing[key] as string[]).join("\n")
              : String(editing[key])
          }
          onChange={(e) =>
            setEditing({
              ...editing,
              [key]: Array.isArray(editing[key])
                ? e.target.value.split("\n")
                : e.target.value,
            })
          }
        />
      </label>
    );
  return (
    <div className="of-site of-admin">
      <aside className="of-admin-sidebar">
        <Link href="/programs" className="of-logo">
          <img src="/offset-logo.svg" width="142" height="32" alt="OFFSET" />
        </Link>
        <p className="of-admin-label">WORKSPACE / 운영 콘솔</p>
        <nav aria-label="운영 메뉴">
          {sections.map(([id, label], i) => (
            <button
              key={id}
              className={section === id ? "active" : ""}
              onClick={() => changeSection(id)}
            >
              <span>{["▦", "≡", "□", "▧", "⚙"][i]}</span>
              {label}
            </button>
          ))}
        </nav>
        <div className="of-admin-sidebar-bottom">
          <Link href="/programs">사이트 보기 ↗</Link>
          {!preview && (
            <form action="/api/auth/logout" method="post">
              <button>로그아웃</button>
            </form>
          )}
          <span>OFFSET PLATFORM · V0.1</span>
        </div>
      </aside>
      <div className="of-admin-main">
        <header>
          <span>
            운영 콘솔 / {sections.find(([id]) => id === section)?.[1]}
          </span>
          <span>{preview ? "미리보기" : "관리자"}</span>
        </header>
        <main>
          {preview && (
            <div className="of-notice">
              가상 신청자가 포함된 운영 화면 미리보기입니다. 샘플 상태 변경은 이 브라우저에만 저장됩니다. 실제 회원 정보는 표시하지 않습니다.{" "}
              <Link href="/admin">운영 콘솔 로그인 ↗</Link>
            </div>
          )}
          {access === "loading" ? (
            <p>권한을 확인하는 중입니다.</p>
          ) : access === "denied" ? (
            <div className="of-admin-gate">
              <p className="of-eyebrow">AUTHORIZED ACCESS</p>
              <h1>운영자 계정으로 로그인해 주세요.</h1>
              <p>
                프로그램, 신청 내역과 콘텐츠는 등록된 운영자만 관리할 수
                있습니다.
              </p>
              <a className="of-button" href="/login?returnTo=/admin">
                Google로 로그인
              </a>
              <a className="of-button secondary" href="/admin/preview">
                운영 화면 미리보기
              </a>
              {error && <p role="alert">{error}</p>}
            </div>
          ) : (
            <>
              {message && (
                <p role="status" className="of-notice">
                  {message}
                </p>
              )}
              {error && (
                <p role="alert" className="of-form-error">
                  {error} <button onClick={reload}>다시 불러오기</button>
                </p>
              )}
              {section === "programs" && !editing && (
                <>
                  <div className="of-admin-title">
                    <div>
                      <p className="of-eyebrow">PROGRAM LIBRARY</p>
                      <h1>프로그램 관리</h1>
                      <p>배움의 시작부터 모집 마감까지, 한곳에서 관리합니다.</p>
                    </div>
                    <button
                      className="of-button"
                      onClick={() =>
                        setEditing({
                          ...seedPrograms[0],
                          id: "",
                          slug: "",
                          title: "",
                          subtitle: "",
                          status: "draft",
                          cohort: "",
                          order: programs.length,
                          updatedAt: new Date().toISOString(),
                        })
                      }
                    >
                      + 프로그램 만들기
                    </button>
                  </div>
                  <div className="of-stats">
                    {[
                      ["전체 프로그램", programs.length],
                      [
                        "모집 중",
                        programs.filter((p) => p.status === "open").length,
                      ],
                      [
                        "초안",
                        programs.filter((p) => p.status === "draft").length,
                      ],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <span>{k}</span>
                        <strong>{String(v).padStart(2, "0")}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="of-admin-toolbar">
                    <div>
                      <button
                        aria-pressed={filter === "all"}
                        onClick={() => setFilter("all")}
                      >
                        전체
                      </button>
                      {(["open", "closed", "draft"] as const).map((s) => (
                        <button
                          key={s}
                          aria-pressed={filter === s}
                          onClick={() => setFilter(s)}
                        >
                          {statusLabel[s]}
                        </button>
                      ))}
                    </div>
                    <span>
                      총{" "}
                      {
                        programs.filter(
                          (p) => filter === "all" || p.status === filter,
                        ).length
                      }
                      개
                    </span>
                  </div>
                  <div className="of-table-scroll">
                    <table className="of-table">
                      <thead>
                        <tr>
                          <th>프로그램</th>
                          <th>유형</th>
                          <th>상태</th>
                          <th>참가비</th>
                          <th>순서</th>
                          <th>관리</th>
                        </tr>
                      </thead>
                      <tbody>
                        {programs
                          .filter(
                            (p) => filter === "all" || p.status === filter,
                          )
                          .map((p) => (
                            <tr key={p.id}>
                              <td>
                                <strong>{p.title.replace("\n", " ")}</strong>
                                <small>
                                  {p.cohort} · {p.duration}
                                </small>
                              </td>
                              <td>{p.category}</td>
                              <td>
                                <span className={`of-status ${p.status}`}>
                                  {statusLabel[p.status]}
                                </span>
                              </td>
                              <td>{money(p.price)}</td>
                              <td>{p.order}</td>
                              <td>
                                <button
                                  onClick={() => {
                                    setEditing(p);
                                    setError("");
                                    setMessage("");
                                  }}
                                >
                                  수정 ↗
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {programs.filter(
                    (p) => filter === "all" || p.status === filter,
                  ).length === 0 && (
                    <div className="of-empty">
                      해당 상태의 프로그램이 없습니다.
                    </div>
                  )}
                </>
              )}
              {section === "programs" && editing && (
                <>
                  <div className="of-admin-title">
                    <div>
                      <button
                        className="of-text-button"
                        onClick={() => setEditing(null)}
                      >
                        ← 프로그램 목록
                      </button>
                      <h1>{editing.id ? "프로그램 수정" : "새 프로그램"}</h1>
                    </div>
                    {editing.id && editing.status !== "draft" && (
                      <a
                        href={"/programs/" + editing.slug}
                        target="_blank"
                        rel="noreferrer"
                      >
                        공개 페이지 보기 ↗
                      </a>
                    )}
                  </div>
                  <form className="of-form of-editor" onSubmit={saveProgram}>
                    <section>
                      <h2>기본 정보</h2>
                      <div className="of-form-grid">
                        {field("title", "프로그램명")}
                        {field("slug", "페이지 주소 (영문 소문자)")}
                        {field("subtitle", "한 줄 소개")}
                        {field("cohort", "기수")}
                        {field("category", "유형", [
                          "워크숍",
                          "클래스",
                          "모임",
                        ])}
                        {field("format", "진행 방식", ["오프라인", "온라인"])}
                        {field("status", "공개·모집 상태", [
                          "draft",
                          "open",
                          "closed",
                        ])}
                        {field("order", "리스트 표시 순서")}

                      </div>
                      <p className="of-muted">
                        초안은 공개 리스트와 상세에서 숨겨집니다. 모집 중으로
                        저장하면 로그인한 회원이 신청할 수 있습니다.
                      </p>
                    </section>
                    <section>
                      <h2>썸네일 이미지</h2>
                      <div className="of-thumbnail-preview">{editing.image&&<img src={editing.image} alt="선택한 썸네일"/>}</div>
                      <p className="of-muted">리스트와 상세페이지에 동일하게 표시됩니다. 선택하지 않으면 공란으로 표시됩니다.</p>
                      {editing.image&&<button type="button" className="of-button secondary" disabled={imageBusy} onClick={()=>setEditing({...editing,image:""})}>썸네일 제거</button>}
                      <ImageLibrary key={editing.id} preview={preview} images={images} onImages={setImages} selected={editing.image} onSelect={image=>setEditing(old=>old?{...old,image}:old)} onBusy={setImageBusy}/>
                      <p className="of-muted">업로드한 이미지는 보관함에 저장됩니다. 썸네일 선택·제거는 아래 변경 사항 저장을 누르면 반영됩니다.</p>
                    </section>
                    <section>
                      <h2>참여 안내</h2>
                      <div className="of-form-grid">
                        {field("duration", "진행 기간")}
                        {field("schedule", "일정·시간")}
                        {field("location", "진행 장소")}
                        {field("capacity", "모집 인원 안내")}
                        {field("price", "참가비 (원)")}
                      </div>
                    </section>
                    <section>
                      <h2>상세 콘텐츠</h2>
                      {editing.detailSections !== undefined ? <SectionEditor key={editing.id} sections={editing.detailSections} onChange={detailSections=>setEditing({...editing,detailSections})} /> : <>
                      <button type="button" className="of-button secondary" onClick={()=>setEditing({...editing,detailSections:[
                        {id:"overview",title:"프로그램 소개",body:editing.description},
                        {id:"outcomes",title:"학습 결과",body:editing.outcomes.map(x=>"- "+x).join("\n")},
                        {id:"audience",title:"참여 대상",body:editing.audience.map(x=>"- "+x).join("\n")},
                        {id:"curriculum",title:"진행 과정",body:editing.curriculum.map(x=>"- "+x).join("\n")},
                        {id:"mentor",title:editing.mentor,body:editing.mentorBio},
                      ]})}>기존 내용을 HTML 에디터로 편집</button>
                      {multiline("description", "프로그램 소개")}
                      {multiline("outcomes", "학습 결과 (한 줄에 한 항목)")}
                      {multiline("audience", "참여 대상 (한 줄에 한 항목)")}
                      {multiline("curriculum", "진행 과정 (한 줄에 한 단계)")}
                      </>}
                    </section>
                    <section className="of-mentor-admin">
                      <h2>오른쪽 패널 · 멘토 소개</h2>
                      <p className="of-muted">상세페이지 오른쪽 멘토 카드에 표시됩니다. 본문의 멘토 섹션은 상세 콘텐츠에서 별도로 편집합니다.</p>
                      <div className="of-form">
                        {field("mentor", "멘토 이름")}
                        {multiline("mentorBio", "소속·직함·소개")}
                        <label>멘토 사진 주소 (선택)<input value={editing.mentorImage??""} maxLength={2000} placeholder="https://… 또는 /이미지.png" onChange={e=>setEditing({...editing,mentorImage:e.target.value})}/></label>
                        <p className="of-muted">비워두면 기본 아바타를 사용합니다. 변경 사항 저장 후 상세페이지에 반영됩니다.</p>
                      </div>
                    </section>
                    <div className="of-editor-actions">
                      <button
                        type="button"
                        className="of-button secondary"
                        onClick={() => setEditing(null)}
                      >
                        취소
                      </button>
                      <button className="of-button" disabled={preview || busy || imageBusy}>
                        {preview
                          ? "미리보기에서는 저장할 수 없어요"
                          : busy
                            ? "저장 중…"
                            : "변경 사항 저장"}
                      </button>
                    </div>
                  </form>
                </>
              )}
              {section === "images" && <><div className="of-admin-title"><div><h1>이미지 관리</h1><p>썸네일을 업로드하고 프로그램에서 사용할 이미지를 관리합니다.</p></div></div><ImageLibrary preview={preview} images={images} onImages={setImages}/></>}
              {section === "applications" && (
                <>
                  <div className="of-admin-title">
                    <div>
                      <p className="of-eyebrow">APPLICATIONS</p>
                      <h1>신청 관리</h1>
                      <p>신청 내용을 확인하고 검토 상태를 관리합니다.</p>
                    </div>
                  </div>
                  {applications.length ? (
                    applications.map((x) => (
                      <article className="of-application" key={x.id}>
                        <header>
                          <div>
                            <h2>{x.name}</h2>
                            <span>
                              {x.email} ·{" "}
                              {new Date(x.created_at).toLocaleDateString(
                                "ko-KR",
                              )}
                            </span>
                          </div>
                          <select
                            aria-label={`${x.name} 신청 상태`}
                            value={x.status}
                            disabled={busy}
                            onChange={(e) => changeStatus(x.id, e.target.value)}
                          >
                            {Object.entries(enrollmentLabel).map(([k, v]) => (
                              <option key={k} value={k}>
                                {v}
                              </option>
                            ))}
                          </select>
                        </header>
                        <h3>{x.title}</h3>
                        <p className="of-muted">신청 번호 {x.id} · 회원 ID {x.user_id}</p>
                        {preview&&<Link href={`/account/preview?member=${encodeURIComponent(x.user_id)}`}>이 회원의 마이페이지 미리보기 ↗</Link>}
                        <p>{x.motivation}</p>
                        <a
                          href={
                            /^https?:\/\//.test(x.portfolio) ? x.portfolio : "#"
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          포트폴리오 열기 ↗
                        </a>
                      </article>
                    ))
                  ) : (
                    <div className="of-empty">
                      <h2>
                        {preview
                          ? "개인정보는 미리보기에 표시하지 않습니다."
                          : "아직 접수된 신청이 없습니다."}
                      </h2>
                      <p>
                        로그인한 회원이 모집 중인 프로그램에 신청하면 이곳에
                        표시됩니다.
                      </p>
                    </div>
                  )}
                </>
              )}
              {section === "content" && !pageEditing && (
                <>
                  <div className="of-admin-title">
                    <div>
                      <p className="of-eyebrow">CONTENT LIBRARY</p>
                      <h1>콘텐츠 관리</h1>
                      <p>홈, About, 공지사항의 원고를 관리합니다.</p>
                    </div>
                    <button
                      className="of-button"
                      onClick={() =>
                        setPageEditing({
                          id: "",
                          type: "notice",
                          title: "",
                          body: "",
                          status: "draft",
                          updatedAt: new Date().toISOString(),
                        })
                      }
                    >
                      + 콘텐츠 만들기
                    </button>
                  </div>
                  <p className="of-notice">
                    현재는 콘텐츠 원고 저장 단계입니다. 기존 홈과 About에 자동
                    반영되지 않으며, 공개 화면 연결은 다음 구축 단계에서
                    진행합니다.
                  </p>
                  {pages.length ? (
                    <div className="of-table-scroll">
                      <table className="of-table">
                        <thead>
                          <tr>
                            <th>제목</th>
                            <th>유형</th>
                            <th>원고 상태</th>
                            <th>관리</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages.map((p) => (
                            <tr key={p.id}>
                              <td>{p.title}</td>
                              <td>{p.type}</td>
                              <td>
                                {p.status === "draft" ? "작성 중" : "원고 확정"}
                              </td>
                              <td>
                                <button onClick={() => setPageEditing(p)}>
                                  수정 ↗
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="of-empty">
                      <h2>첫 콘텐츠를 준비해 보세요.</h2>
                      <p>
                        새 페이지를 만들 때 기존 프로그램 운영 구조를 그대로
                        활용할 수 있습니다.
                      </p>
                    </div>
                  )}
                </>
              )}
              {section === "content" && pageEditing && (
                <form className="of-form of-editor" onSubmit={savePage}>
                  <h1>{pageEditing.id ? "콘텐츠 수정" : "새 콘텐츠"}</h1>
                  <label>
                    콘텐츠 유형
                    <select
                      value={pageEditing.type}
                      onChange={(e) =>
                        setPageEditing({
                          ...pageEditing,
                          type: e.target.value as ContentPage["type"],
                        })
                      }
                    >
                      <option value="home">홈</option>
                      <option value="about">About</option>
                      <option value="notice">공지사항</option>
                    </select>
                  </label>
                  <label>
                    제목
                    <input
                      required
                      maxLength={200}
                      value={pageEditing.title}
                      onChange={(e) =>
                        setPageEditing({
                          ...pageEditing,
                          title: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label>
                    원고
                    <textarea
                      required
                      rows={12}
                      maxLength={20000}
                      value={pageEditing.body}
                      onChange={(e) =>
                        setPageEditing({ ...pageEditing, body: e.target.value })
                      }
                    />
                  </label>
                  <label>
                    원고 상태
                    <select
                      value={pageEditing.status}
                      onChange={(e) =>
                        setPageEditing({
                          ...pageEditing,
                          status: e.target.value as ContentPage["status"],
                        })
                      }
                    >
                      <option value="draft">작성 중</option>
                      <option value="published">
                        원고 확정 (사이트 공개와 별개)
                      </option>
                    </select>
                  </label>
                  <div className="of-editor-actions">
                    <button
                      type="button"
                      className="of-button secondary"
                      onClick={() => setPageEditing(null)}
                    >
                      취소
                    </button>
                    <button className="of-button" disabled={busy || preview}>
                      {preview
                        ? "미리보기에서는 저장할 수 없어요"
                        : busy
                          ? "저장 중…"
                          : "콘텐츠 저장"}
                    </button>
                  </div>
                </form>
              )}
              {section === "settings" && (
                <>
                  <div className="of-admin-title">
                    <div>
                      <p className="of-eyebrow">OPERATIONS</p>
                      <h1>운영 설정</h1>
                      <p>서비스 운영 기준과 연결 상태를 확인합니다.</p>
                    </div>
                  </div>
                  <dl className="of-settings">
                    <div>
                      <dt>회원 로그인</dt>
                      <dd>Google 계정 · 이메일 확인 필수</dd>
                    </div>
                    <div>
                      <dt>운영자 권한</dt>
                      <dd>서버에 등록된 운영자 이메일만 허용</dd>
                    </div>
                    <div>
                      <dt>신청 절차</dt>
                      <dd>로그인 → 신청 → 검토 → 참가 안내</dd>
                    </div>
                    <div>
                      <dt>결제</dt>
                      <dd>신청 단계에서 결제하지 않음 · 선정 후 별도 안내</dd>
                    </div>
                    <div>
                      <dt>개인정보 보관</dt>
                      <dd>신청일로부터 1년 · 운영자 삭제 작업 필요</dd>
                    </div>
                    <div>
                      <dt>변경 이력</dt>
                      <dd>프로그램, 원고, 신청 상태 변경을 서버에 기록</dd>
                    </div>
                  </dl>
                  <p className="of-muted">
                    로그인 연결 정보와 운영자 권한은 서버 환경 설정에서
                    관리합니다.
                  </p>
                </>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
