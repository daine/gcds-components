import { newSpecPage } from '@stencil/core/testing';
import { GcdsFooter } from '../gcds-footer';

describe('gcds-footer', () => {
  it('renders compact - English', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer type="compact" lang="en"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" type="compact" lang="en">
        <mock:shadow-root>
          <div class="container">
            <slot name="top"></slot>
          </div>
          <div class="brand">
            <div class="container">
              <nav aria-label="About this site">
                <h2>
                  About this site
                </h2>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/en/social.html">
                      Social media
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/mobile.html">
                      Mobile applications
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/about.html">
                      About Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/terms.html">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/privacy.html">
                      Privacy
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="wordmark">
                <gcds-signature lang="en" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });

  it('renders full - English', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer type="full" lang="en"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" type="full" lang="en">
        <mock:shadow-root>
          <div class="container">
            <slot name="top"></slot>
          </div>
          <div class="landscape">
            <nav aria-label="About government" class="container">
              <h2>
                About government
              </h2>
              <ul>
                <li>
                  <a href="https://canada.ca/en/contact.html">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/en/government/dept.html">
                    Departments and agencies
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/en/government/publicservice.html">
                    Public service and military
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/en/news.html">
                    News
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/en/government/system/laws.html">
                    Treaties, laws and regulations
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/en/transparency/reporting.html">
                    Government-wide reporting
                  </a>
                </li>
                <li>
                  <a href="http://pm.gc.ca/en">
                    Prime Minister
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/en/government/system.html">
                    About government
                  </a>
                </li>
                <li>
                  <a href="http://open.canada.ca/en">
                    Open government
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="brand">
            <div class="container">
              <nav aria-label="About this site">
                <h2>
                  About this site
                </h2>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/en/social.html">
                      Social media
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/mobile.html">
                      Mobile applications
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/about.html">
                      About Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/terms.html">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/privacy.html">
                      Privacy
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="wordmark">
                <gcds-signature lang="en" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });

  it('renders compact - French', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer type="compact" lang="fr"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" type="compact" lang="fr">
        <mock:shadow-root>
          <div class="container">
            <slot name="top"></slot>
          </div>
          <div class="brand">
            <div class="container">
              <nav aria-label="À propos de ce site">
                <h2>
                  À propos de ce site
                </h2>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/fr/sociaux.html">
                      Médias sociaux
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/mobile.html">
                      Applications mobiles
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/gouvernement/a-propos.html">
                      À propos de Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/transparence/avis.html">
                      Avis
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/transparence/confidentialite.html">
                      Confidentialité
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="wordmark">
                <gcds-signature lang="fr" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });

  it('renders full - French', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer type="full" lang="fr"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" type="full" lang="fr">
        <mock:shadow-root>
          <div class="container">
            <slot name="top"></slot>
          </div>
          <div class="landscape">
            <nav aria-label="Au sujet du gouvernement" class="container">
              <h2>
                Au sujet du gouvernement
              </h2>
              <ul>
                <li>
                  <a href="https://www.canada.ca/fr/contact.html">
                    Contactez-nous
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/fr/gouvernement/min.html">
                    Ministères et organismes
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/fr/gouvernement/fonctionpublique.html">
                    Fonction publique et force militaire
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/fr/nouvelles.html">
                    Nouvelles
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/fr/gouvernement/systeme/lois.html">
                    Traités, lois et règlements
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/fr/transparence/rapports.html">
                    Rapports à l'échelle du gouvernement
                  </a>
                </li>
                <li>
                  <a href="http://pm.gc.ca/fr">
                    Premier ministre
                  </a>
                </li>
                <li>
                  <a href="https://www.canada.ca/fr/gouvernement/systeme.html">
                    À propos du gouvernement
                  </a>
                </li>
                <li>
                  <a href="http://ouvert.canada.ca/">
                    Gouvernement ouvert
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="brand">
            <div class="container">
              <nav aria-label="À propos de ce site">
                <h2>
                  À propos de ce site
                </h2>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/fr/sociaux.html">
                      Médias sociaux
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/mobile.html">
                      Applications mobiles
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/gouvernement/a-propos.html">
                      À propos de Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/transparence/avis.html">
                      Avis
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/transparence/confidentialite.html">
                      Confidentialité
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="wordmark">
                <gcds-signature lang="fr" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });


});