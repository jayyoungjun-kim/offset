import { cleanDetailHtml } from "./detail-html";
import { ApiError } from "./auth";
import { type Program, type ContentPage } from "./program-data";
const text = (v: unknown, max = 1000) => {
  if (typeof v !== "string" || !v.trim() || v.length > max)
    throw new ApiError(400, "필수 항목과 글자 수를 확인해 주세요.");
  return v.trim();
};
const choice = <T extends string>(v: unknown, values: T[]): T => {
  if (!values.includes(v as T))
    throw new ApiError(400, "올바르지 않은 선택값입니다.");
  return v as T;
};
function lines(v: unknown) {
  if (!Array.isArray(v) || v.length > 20 || !v.length)
    throw new ApiError(400, "내용을 한 줄 이상 작성해 주세요.");
  return v.map((x) => text(x, 1000));
}
export function validateProgram(v: Record<string, unknown>): Program {
  const slug = text(v.slug, 80);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    throw new ApiError(
      400,
      "주소는 영문 소문자, 숫자, 하이픈만 사용할 수 있습니다.",
    );
  const price = Number(v.price),
    order = Number(v.order);
  if (
    !Number.isSafeInteger(price) ||
    price < 0 ||
    price > 100000000 ||
    !Number.isSafeInteger(order) ||
    order < 0 ||
    order > 10000
  )
    throw new ApiError(400, "가격과 순서를 확인해 주세요.");
  const image = typeof v.image === "string" ? v.image.trim() : "";
  if (image && !/^\/media\/[a-f0-9-]{36}\.webp$/.test(image))
    throw new ApiError(400, "이미지 관리에서 썸네일을 선택해 주세요.");
  const mentorImage = typeof v.mentorImage === "string" ? v.mentorImage.trim() : "";
  if(mentorImage){
    let valid=/^\/(?!\/)[a-zA-Z0-9_./-]+$/.test(mentorImage);
    try{const url=new URL(mentorImage);valid=url.protocol==="https:"&&!url.username&&!url.password;}catch{}
    if(!valid||mentorImage.length>2000)throw new ApiError(400,"멘토 사진은 /로 시작하는 이미지 경로나 HTTPS 주소를 입력해 주세요.");
  }
  let detailSections: Program["detailSections"];
  if (v.detailSections !== undefined) {
    if (!Array.isArray(v.detailSections) || v.detailSections.length > 20)
      throw new ApiError(400, "상세 섹션은 최대 20개까지 입력할 수 있습니다.");
    detailSections = v.detailSections.map((section) => {
      if (!section || typeof section !== "object") throw new ApiError(400, "상세 섹션을 확인해 주세요.");
      const id = text(section.id, 80);
      if (!/^[a-z0-9-]+$/.test(id)) throw new ApiError(400, "섹션 주소를 확인해 주세요.");
      const html = section.html === undefined ? undefined : cleanDetailHtml(text(section.html, 24000));
      if (html !== undefined && !html.trim()) throw new ApiError(400, "표시할 HTML 내용을 입력해 주세요.");
      return { id, title: text(section.title, 200), body: html === undefined ? text(section.body,12000) : (section.body ? text(section.body,12000) : ""), ...(html!==undefined?{html}:{}) };
    });
    if (new Set(detailSections.map(s => s.id)).size !== detailSections.length)
      throw new ApiError(400, "섹션 주소는 중복할 수 없습니다.");
  }
  return {
    ...(detailSections !== undefined ? {detailSections} : {}),
    id: v.id ? text(v.id, 100) : crypto.randomUUID(),
    slug,
    title: text(v.title, 100),
    subtitle: text(v.subtitle, 200),
    category: choice(v.category, ["워크숍", "클래스", "모임"]),
    status: choice(v.status, ["draft", "open", "closed"]),
    format: choice(v.format, ["온라인", "오프라인"]),
    cohort: text(v.cohort, 40),
    duration: text(v.duration, 100),
    schedule: text(v.schedule, 200),
    location: text(v.location, 200),
    capacity: text(v.capacity, 100),
    price,
    description: text(v.description, 5000),
    outcomes: lines(v.outcomes),
    audience: lines(v.audience),
    curriculum: lines(v.curriculum),
    mentor: text(v.mentor, 100),
    mentorBio: text(v.mentorBio, 2000),
    ...(mentorImage?{mentorImage}:{}),
    image,
    order,
    updatedAt: new Date().toISOString(),
  };
}
export function validatePage(v: Record<string, unknown>): ContentPage {
  return {
    id: v.id ? text(v.id, 100) : crypto.randomUUID(),
    type: choice(v.type, ["home", "about", "notice"]),
    title: text(v.title, 200),
    body: text(v.body, 20000),
    status: choice(v.status, ["draft", "published"]),
    updatedAt: new Date().toISOString(),
  };
}
