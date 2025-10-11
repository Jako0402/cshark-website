function showSong(songKey) {
  const songs = {
    kampsang: `
      <h1>Kampsang fra ParXafari</h1>
      <p>Mel: højt fra træets grønne top<br>
      <br>
      1.<br>
      Fra den våde unipark<br>
      Lyder sejersråbet<br>
      Alle andre nat tech hold<br>
      Mister pludselig håbet<br>
      Vores hold er destruktiv<br>
      Vores hold er pisse stiv’<br>
      Når vi tager sejren<br>
      Vil vi bælle baj’ren<br>
      <br>
      2.<br>
      Vi er en flok monkedreng’<br>
      Og vi er buddhister<br>
      Det er intet stort problem<br>
      At der’ ingen piger<br>
      For vi har CLRS<br>
      Og vi er go’ til at læs’<br>
      Vi er tyve drenge<br>
      Og vi synger sange<br>
      <br>
      3.<br>
      Nu skal vi ha’ matematik,<br>
      heldigvis ik’ fysik,<br>
      dem som elsker accel’ration<br>
      Er en tabt gen’ration<br>
      Vi er ik kultursociolog<br>
      Vi vil være datalog<br>
      Og det vil vi blive<br>
      Ingen vil opgive!<br>
      <br>
      4.<br>
      Vi er ret husmoderlig,<br>
      Ej hvor er det hyggeligt,<br>
      Vaskeri og handleri,<br>
      Gud hvor er det kedelig,<br>
      men nu går vi på uni,<br>
      og det er så finurlig<br>
      16-hund for bøger,<br>
      Fuck hvor er de dyre</p>
    `,
    overspringshandling: `
      <h1>En overspringshandling</h1>
      <p>Mel: Hakuna matata<br>
      <br>
      En overspringshandling, er det klogeste ord<br>
      En overspringshandling, det den taktik vi brug’r<br>
      Så tag det roligt. Udskyd det til i morgn’<br>
      Det den ideologi der gi’r os fri<br>
      En overspringshandling
      </p>
    `,
  };

  const contentPane = document.getElementById("contentPane");
  contentPane.innerHTML = songs[songKey];
}
