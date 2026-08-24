# Convertisseur Sciences — projet Capacitor

Deux façons de compiler l'appli : **sur ordinateur** (section A) ou
**entièrement depuis ton téléphone**, via GitHub Actions qui compile à
ta place dans le cloud (section B — recommandée si tu n'as pas d'ordi
sous la main).

---

## B. Tout faire depuis ton téléphone (recommandé)

### B1. Mettre le projet sur GitHub

1. Crée un compte gratuit sur [github.com](https://github.com) (navigateur mobile,
   Chrome ou Safari — pas besoin de l'appli).
2. Crée un nouveau dépôt (bouton **+** → **New repository**), nomme-le par
   exemple `convertisseur-sciences`, coche **Public** ou **Private** (les deux
   fonctionnent), puis **Create repository**.
3. Pour chaque fichier de ce projet (`package.json`, `capacitor.config.json`,
   `www/index.html`, `www/config.js`, `www/ads.js`,
   `.github/workflows/build-apk.yml`) :
   - Sur la page du dépôt, touche **Add file** → **Create new file**
   - Dans le champ nom, tape le **chemin complet** (ex. `www/index.html`) —
     GitHub crée le dossier `www` tout seul
   - Colle le contenu du fichier (copie-le depuis ce que je t'ai envoyé)
   - Valide en bas (**Commit changes**)
   - Répète pour chaque fichier

   Astuce : si ton navigateur mobile le permet, la page **Add file → Upload
   files** accepte aussi la sélection de plusieurs fichiers d'un coup depuis
   ton stockage — essaie ça en premier, et si les sous-dossiers ne se créent
   pas correctement, reviens à la méthode "Create new file" ci-dessus.

### B2. Lancer la compilation

Dès que le fichier `.github/workflows/build-apk.yml` est ajouté (ou à chaque
fois que tu modifies un fichier ensuite), GitHub compile automatiquement.
Pour suivre ou relancer manuellement :

1. Va dans l'onglet **Actions** de ton dépôt
2. Tu vois "Build APK" en cours (point orange) ou terminé (✓ vert) —
   ça prend 3 à 5 minutes
3. Une fois terminé, touche le run, puis descends jusqu'à **Artifacts** :
   tu y trouves **convertisseur-perso** (sans pub, pour toi) et
   **convertisseur-partage** (avec pub, pour tes camarades)
4. Télécharge le `.zip` de ton choix — il contient le fichier `.apk`

### B3. Installer l'APK

Ouvre le `.zip` téléchargé (ton gestionnaire de fichiers l'extrait), touche
le fichier `.apk` → Android demande d'autoriser "Sources inconnues" pour
cette installation → accepte → l'appli s'installe.

Envoie le `.zip` "partage" à tes camarades (Drive, WhatsApp...) pour qu'ils
fassent pareil de leur côté.

---

## A. Sur ordinateur (alternative classique)

Installe [Node.js](https://nodejs.org) et [Android Studio](https://developer.android.com/studio).

### 1. Installation (une seule fois)

```bash
cd convertisseur-app
npm install
npx cap add android
```

## 2. Tester l'appli tout de suite (pas besoin de compte développeur)

Branche ton téléphone en USB (mode débogage USB activé dans les options développeur),
ou lance un émulateur depuis Android Studio, puis :

```bash
npx cap sync android
npx cap open android
```

Android Studio s'ouvre → clique sur ▶️ **Run**. L'appli s'installe directement
sur ton téléphone. C'est comme ça que toi et tes camarades pouvez tester dès
maintenant, sans rien publier nulle part.

## 3. Deux versions : toi (sans pub) / tes camarades (avec pub)

Le fichier `www/config.js` contrôle tout. Avant chaque compilation :

**Pour ta version perso (aucune pub) :**
```js
ADS_ENABLED: false
```

**Pour la version à partager (avec bannière pub) :**
```js
ADS_ENABLED: true
```

Change la valeur, relance `npx cap sync android`, puis recompile
(`Build > Build APK` dans Android Studio). Tu obtiens deux fichiers `.apk`
différents — garde-les dans des dossiers séparés pour ne pas les confondre.

Pour l'instant `config.js` utilise les **ID de test Google** pour AdMob :
ça affiche une vraie bannière mais qui ne rapporte jamais d'argent, ce qui
est parfait pour tester sans risquer de te faire bannir avant même d'avoir
un compte AdMob.

## 4. Récolter les avis de tes camarades (maintenant)

Deux options simples, sans rien publier :
- **Partage direct de l'APK** : envoie le fichier `.apk` par lien Drive/WhatsApp,
  ils activent "Sources inconnues" dans leurs réglages Android pour l'installer.
- **Ajoute un lien de retour** : mets l'URL d'un Google Form dans
  `FEEDBACK_URL` (dans `config.js`) — un lien "Donner mon avis" apparaît alors
  en bas de l'appli.

## 5. Plus tard : compte développeur + vraies pubs

Quand tu es prêt (toi ou un parent, 18 ans requis, 25 $ US) :

1. Crée le compte sur [play.google.com/console](https://play.google.com/console)
2. Crée un projet dans [AdMob](https://apps.admob.com), récupère ton
   **App ID** et ton **ID de bannière**, remplace les valeurs de test dans
   `config.js` (`ADMOB_APP_ID`, `ADMOB_BANNER_ID`)
3. Dans Play Console, publie l'appli en **"Test fermé"** (pas en public) et
   invite tes camarades par e-mail — ça débloque les vraies pubs sans rendre
   l'appli visible sur le store.

## Rappel

- Change `appId` dans `capacitor.config.json` (actuellement
  `com.tonpseudo.convertisseursciences`) par quelque chose d'unique à toi.
- Ne mélange jamais les deux fichiers `.apk` (perso / partagé) — pense à bien
  vérifier `ADS_ENABLED` avant chaque build.
  
