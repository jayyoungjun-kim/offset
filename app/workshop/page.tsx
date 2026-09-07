import Detail, { generateMetadata as programMetadata } from "../programs/[slug]/page";
export const dynamic = "force-dynamic";
const params = () => Promise.resolve({slug:"portfolio-workshop"});
export async function generateMetadata() {
  return {...await programMetadata({params:params()}),alternates:{canonical:"/workshop"}};
}
export default function Workshop() {return <Detail params={params()} />;}
