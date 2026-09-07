import {listEnrollments,submitEnrollment} from "../../lib/enrollments";
export async function GET(request:Request){return listEnrollments(request);}
export async function POST(request:Request){return submitEnrollment(request);}
