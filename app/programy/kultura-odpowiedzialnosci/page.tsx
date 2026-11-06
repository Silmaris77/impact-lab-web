import type { Metadata } from 'next';
import { ProgramPage } from '@/components/program-page';
import { ownershipProgram } from '@/lib/programs';

export const metadata: Metadata = { title: 'Kultura odpowiedzialności | Impact Lab', description: ownershipProgram.summary };

export default function OwnershipPage() {
  return <ProgramPage program={ownershipProgram}/>;
}
