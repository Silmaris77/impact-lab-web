import type { Metadata } from 'next';
import { ProgramPage } from '@/components/program-page';
import { frisProgram } from '@/lib/programs';

export const metadata: Metadata = { title: 'Siła różnorodności z FRIS® | Impact Lab', description: frisProgram.summary };

export default function FrisPage() {
  return <ProgramPage program={frisProgram}/>;
}
