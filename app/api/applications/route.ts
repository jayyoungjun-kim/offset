import {submitEnrollment} from '../../lib/enrollments';
import * as legacy from '../../lib/legacy-applications';
import {isLegacyProductionRequest} from '../../lib/environment';
// The live static production form still calls the old Sites hostname.
// Preserve that route until production migrates; QA never uses its external store.
export async function POST(request:Request) {
  return isLegacyProductionRequest(request) ? legacy.POST(request) : submitEnrollment(request);
}
export async function PUT(request:Request) {
  if (isLegacyProductionRequest(request)) return legacy.PUT(request);
  return Response.json({error:'프로그램 상세에서 포트폴리오 링크로 신청해 주세요.'},{status:410});
}
export async function OPTIONS(request:Request) {
  if (isLegacyProductionRequest(request)) return legacy.OPTIONS();
  return new Response(null,{status:403});
}
