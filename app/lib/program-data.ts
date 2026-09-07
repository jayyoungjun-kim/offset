export type Program = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "워크숍" | "클래스" | "모임";
  status: "draft" | "open" | "closed";
  format: "오프라인" | "온라인";
  cohort: string;
  duration: string;
  schedule: string;
  location: string;
  capacity: string;
  price: number;
  description: string;
  outcomes: string[];
  audience: string[];
  curriculum: string[];
  mentor: string;
  mentorBio: string;
  image: string;
  order: number;
  updatedAt: string;
};
export const seedPrograms: Program[] = [
  {
    id: "portfolio-01",
    slug: "portfolio-workshop",
    title: "프로덕트 디자이너\n포트폴리오 완성반",
    subtitle: "나의 경험과 역량이 분명하게 전달되는 포트폴리오.",
    category: "워크숍",
    status: "closed",
    format: "오프라인",
    cohort: "1기",
    duration: "4주 · 주 1회",
    schedule: "회당 2시간 30분~3시간",
    location: "서울 · 세부 장소 별도 안내",
    capacity: "9명 · 그룹당 3명",
    price: 320000,
    description:
      "어떤 프로젝트를 앞에 둘지, 설명은 어디까지 해야 할지, 지금의 완성도로 지원해도 괜찮을지. 혼자서는 무엇을 더 바꿔야 할지 판단하기 어렵습니다. 현업 프로덕트 디자인 리드이자 채용 담당자의 관점으로 현재 포트폴리오를 진단하고, 4주 동안 리뷰와 수정을 반복합니다.",
    outcomes: [
      "경험과 역량이 명확하게 드러나는 프로젝트 구성",
      "문제 해결 과정과 나의 기여도를 전달하는 스토리",
      "스스로 작업을 돌아보고 개선할 수 있는 기준",
    ],
    audience: [
      "기존 포트폴리오를 현업의 기준으로 점검하고 싶은 주니어 디자이너",
      "혼자 수정하는 데 한계를 느끼고 구체적인 피드백이 필요한 분",
      "매주 피드백을 직접 작업에 반영할 수 있는 분",
    ],
    curriculum: [
      "현재 포트폴리오를 진단하고 개선 방향을 정합니다.",
      "피드백을 반영해 프로젝트의 구성과 전달 방식을 다듬습니다.",
      "수정한 작업을 다시 리뷰하고 다른 참가자의 관점을 나눕니다.",
      "리뷰와 수정을 반복하며 포트폴리오의 완성도를 높입니다.",
    ],
    mentor: "OFFSET 멘토",
    mentorBio:
      "현 심플 컴플렉스 디자인 디렉터. 전 29CM 프로덕트 디자인 리드. 현업과 채용의 관점에서 포트폴리오를 함께 살펴봅니다.",
    image: "/workshop-icon-07.png",
    order: 0,
    updatedAt: "2026-09-07T00:00:00.000Z",
  },
];
export type ContentPage = {
  id: string;
  type: "home" | "about" | "notice";
  title: string;
  body: string;
  status: "draft" | "published";
  updatedAt: string;
};
export type Enrollment = {
  id: string;
  user_id: string;
  program_id: string;
  name: string;
  email: string;
  motivation: string;
  portfolio: string;
  status: "submitted" | "reviewing" | "accepted" | "declined" | "cancelled";
  created_at: string;
  title?: string;
};
export const statusLabel = {
  draft: "초안",
  open: "모집 중",
  closed: "모집 마감",
};
export const enrollmentLabel = {
  submitted: "신청 완료",
  reviewing: "검토 중",
  accepted: "참가 가능",
  declined: "참가 불가",
  cancelled: "취소됨",
};
export const money = (amount: number) =>
  new Intl.NumberFormat("ko-KR").format(amount) + "원";
