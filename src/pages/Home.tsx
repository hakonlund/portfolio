import { useState } from 'react';

export const Home = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:din@email.no?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="home">
      <h1>Hei, og velkommen hit!</h1>
      <p>
        Jeg heter Håkon Teigen Lund, og jeg jobber med å arrangere sanger for kor – alt fra poplåter til klassiske perler.
        Jeg har arrangert for kor i snart femten år, og har også dirigert flere kor gjennom årene. Det gir meg et godt
        blikk for hva som fungerer i praksis – både musikalsk og i øvingshverdagen.
      </p>
      <p>
        Her på nettsiden finner du en liste over ferdige arrangementer som du kan bruke med koret ditt. Ønsker du noe helt eget,
        lager jeg gjerne spesialtilpassede arrangementer – og jeg tilpasser alltid etter korets nivå og behov.
      </p>
      <p>
        Bare send meg en e-post hvis du vil bestille eller har spørsmål. Håper du finner noe du liker – og takk for at du titter innom!
      </p>

      <h2>Kontakt meg</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Emne:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
        <label>
          Melding:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={5}
            required
          />
        </label>
        <button type="submit">Send e-post</button>
      </form>
    </div>
  );
};