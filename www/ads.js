// ============================================================
// PUBS — bannière discrète uniquement, jamais d'interstitiel
// ============================================================
// Ce script ne fait rien si :
//  - ADS_ENABLED est à false dans config.js (ta version perso)
//  - l'appli tourne dans un simple navigateur (pas encore compilée)
// Il ne s'active que dans l'appli Android compilée avec Capacitor.

async function initAds(){
  const cfg = window.APP_CONFIG || {};
  if(!cfg.ADS_ENABLED) return;

  // Le plugin AdMob n'existe que dans l'appli Android compilée,
  // pas dans un navigateur classique — donc on vérifie qu'il est
  // bien disponible avant de l'utiliser.
  if(!window.Capacitor || !window.Capacitor.Plugins || !window.Capacitor.Plugins.AdMob){
    console.log("AdMob non disponible dans cet environnement (normal en aperçu web).");
    return;
  }

  const { AdMob } = window.Capacitor.Plugins;

  try {
    await AdMob.initialize({
      requestTrackingAuthorization: true,
      initializeForTesting: cfg.ADMOB_APP_ID.includes("3940256099942544")
    });

    // Bannière fixe en bas, petit format — pas d'interstitiel,
    // pas de pub plein écran, pas de pub qui s'ouvre toute seule.
    await AdMob.showBanner({
      adId: cfg.ADMOB_BANNER_ID,
      adSize: "ADAPTIVE_BANNER",
      position: "BOTTOM_CENTER",
      margin: 0,
      isTesting: cfg.ADMOB_APP_ID.includes("3940256099942544")
    });
  } catch(e) {
    console.log("Erreur AdMob (souvent normal hors appli compilée) :", e);
  }
}

document.addEventListener('DOMContentLoaded', initAds);
     
