import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section" style={{ backgroundImage: 'url(/img/bilde_dirigering.jpg)' }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Håkons korarrangementer</h1>
        </div>
      </div>

      <div className="home-content">
        <p>
          Jeg heter Håkon Teigen Lund, og jeg jobber med å arrangere sanger for kor, alt fra poplåter til klassiske stykker.
          Jeg har arrangert for kor i snart femten år, og har også dirigert flere kor gjennom årene. Det gir meg et godt
          blikk for hva som fungerer i praksis.
        </p>
        <p>
          Her på nettsiden finner du en liste over ferdige arrangementer som du kan bruke med koret ditt. Ønsker du noe helt eget,
          lager jeg gjerne spesialtilpassede arrangementer.
        </p>
        <p>
          Bare send meg en e-post på <a href="mailto: hakontei@gmail.com">hakontei@gmail.com</a> hvis du vil bestille nytt arrangement, kjøpe et av mine ferdige arrangement, eller har spørsmål.
        </p>
        <div className="cta-container">
          <Link href="/arrangementer" className="cta-button">
            Se alle arrangementer
          </Link>
        </div>
      </div>
    </div>
  );
}
