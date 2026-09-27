import { LegalPage, legalMetadata } from "../components/legal-page";

export const metadata = legalMetadata("algemene-voorwaarden-2.1");

export default function Page() {
  return <LegalPage slug="algemene-voorwaarden-2.1" />;
}
