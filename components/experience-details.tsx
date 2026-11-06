import { importantProjects, selectedClients, certificates } from '@/lib/experience';

export function ExperienceDetails() {
  return <div className="experience-details">
    <div className="experience-columns">
      <section aria-labelledby="projects-title"><h3 id="projects-title">Ważne projekty</h3><ul>{importantProjects.map(project => <li key={project}>{project}</li>)}</ul></section>
      <section aria-labelledby="clients-title"><h3 id="clients-title">Wybrani klienci</h3><ul>{selectedClients.map(group => <li key={group.industry}><strong>{group.industry}:</strong> {group.names.join(', ')}</li>)}</ul></section>
      <section aria-labelledby="certificates-title"><h3 id="certificates-title">Certyfikaty</h3><ul>{certificates.map(certificate => <li key={certificate}>{certificate}</li>)}</ul></section>
    </div>
  </div>;
}
