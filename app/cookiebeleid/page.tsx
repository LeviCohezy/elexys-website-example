import { LegalPage, legalMetadata } from "../components/legal-page";

export const metadata = legalMetadata("cookiebeleid");

export default function Page() {
  return <LegalPage slug="cookiebeleid" />;
}
