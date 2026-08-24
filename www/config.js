// ============================================================
// CONFIG DE BUILD — à modifier avant chaque compilation
// ============================================================
//
// Pour TA version personnelle (sans pub, sans payer) :
//   ADS_ENABLED = false
//
// Pour la version que tu partages à tes camarades (avec pub) :
//   ADS_ENABLED = true
//
// C'est le seul fichier à changer entre les deux builds.
// ============================================================

window.APP_CONFIG = {
  ADS_ENABLED: true,

  // ID d'appli AdMob (à remplacer par le tien une fois ton compte
  // AdMob créé — https://apps.admob.com). Laisser tel quel = pubs
  // de TEST uniquement (aucun revenu, mais permet de tout tester
  // avant d'avoir un vrai compte).
  ADMOB_APP_ID: "ca-app-pub-3940256099942544~3347511713", // ID de test Google
  ADMOB_BANNER_ID: "ca-app-pub-3940256099942544/6300978111", // ID de test Google

  // Lien vers un formulaire (Google Forms par ex.) pour récolter
  // l'avis de tes camarades pendant la phase de test.
  FEEDBACK_URL: "" // ex: "https://forms.gle/xxxxxxx"
};
