# INDEX_PROJET.md — MuseMeteo

**Dossiers des plugins disponibles dans :** `C:\Users\Pierre\Documents\GitHub\temp\agents\plugins`

---

## 🎯 Contexte du projet

**Application légère monopage (HTML/JS Vanilla) avec :** Application web de météo avec données agricoles. 3 modèles de météo précis via API pour des prévisions françaises avec indice de confiance.

**Stack technique :**
- HTML/CSS/JS pur (aucun framework)
- TailwindCSS via CDN pour le styling
- Open-Meteo API (modèles : AROME France 1.3km, ICON Seamless, Best Match)
- Air Quality API (european_aqi)
- Géocodage Open-Meteo
- Reverse géocodage Nominatim (OSM)
- Cache localStorage (30 min)
- Mode hors-ligne
- Interface responsive et tactile
- Un seul fichier `index.html`

**Fonctionnalités clés :**
- Affichage des prévisions météo (France)
- 3 modèles de prévision (AROME, ICON Seamless, Best Match)
- Indice de confiance par modèle (calculé à partir des écarts entre modèles)
- Données agricoles (ETP, température du sol, Delta T, UV, AQI)
- Prévisions horaires sur 24h
- Prévisions journalières sur 7 jours
- Recherche de ville (géocodage)
- Géolocalisation
- Radar de pluie (RainViewer)
- Thème clair/sombre
- Cache hors-ligne

---

## 📋 Agents retenus

---

### ACCESSIBILITY-COMPLIANCE

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/ui-visual-validator.md** | ➜ Déclencher après chaque modification UI majeure (cartes météo, graphiques, sélecteurs de modèle) pour vérifier contraste, focus, et interactions tactiles | `accessibility-compliance/agents/ui-visual-validator.md` |
| **commands/accessibility-audit.md** | ➜ Utiliser avant une revue de code ou un push pour valider la conformité WCAG 2.1 AA (contraste des couleurs météo, navigation clavier sur les cartes) | `accessibility-compliance/commands/accessibility-audit.md` |
| **skills/screen-reader-testing/SKILL.md** | ➜ Appliquer lors des tests manuels sur mobile pour valider l'expérience utilisateur (lecture des températures, des prévisions) | `accessibility-compliance/skills/screen-reader-testing/SKILL.md` |
| **skills/wcag-audit-patterns/SKILL.md** | ➜ Utiliser pour valider les composants custom (cartes météo, sélecteurs, indicateurs de confiance) contre les règles WCAG 2.1 AA | `accessibility-compliance/skills/wcag-audit-patterns/SKILL.md` |

---

### APPLICATION-PERFORMANCE

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/frontend-developer.md** | ➜ Déclencher pour toute optimisation de rendu, gestion du DOM (rafraîchissement des cartes, animations de transitions) | `application-performance/agents/frontend-developer.md` |
| **commands/performance-optimization.md** | ➜ Lancer après avoir ajouté une nouvelle fonctionnalité pour valider le maintien de 60fps (scrolling des prévisions horaires, animations de chargement) | `application-performance/commands/performance-optimization.md` |

---

### CICD-AUTOMATION

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/deployment-engineer.md** | ➜ Utiliser pour configurer le déploiement sur GitHub Pages ou Netlify (fichier `index.html` unique) | `cicd-automation/agents/deployment-engineer.md` |
| **commands/workflow-automate.md** | ➜ Utiliser pour automatiser les tests de validation avant déploiement (vérification des appels API, cache) | `cicd-automation/commands/workflow-automate.md` |

---

### CODE-DOCUMENTATION

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/code-reviewer.md** | ➜ Utiliser lors des revues de code pour vérifier la clarté et l'auto-documentation du code (fonctions nommées explicitement, variables claires) | `code-documentation/agents/code-reviewer.md` |
| **commands/code-explain.md** | ➜ Déclencher lorsqu'une fonction ou un bloc de code devient trop complexe (ex: traitement des modèles météo, calcul du Delta T, indice de confiance) | `code-documentation/commands/code-explain.md` |

---

### CODE-REFACTORING

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/code-reviewer.md** | ➜ Utiliser avant chaque refactoring pour identifier les opportunités de simplification (gestion des modèles météo, cache) | `code-refactoring/agents/code-reviewer.md` |
| **agents/legacy-modernizer.md** | ➜ Utiliser pour maintenir la codebase propre et modulaire, surtout avec l'accumulation de versions (V4) | `code-refactoring/agents/legacy-modernizer.md` |
| **commands/tech-debt.md** | ➜ Lancer périodiquement pour évaluer la dette technique accumulée (surtout la gestion des données, le rendu des cartes) | `code-refactoring/commands/tech-debt.md` |
| **commands/refactor-clean.md** | ➜ Utiliser avant d'ajouter une nouvelle fonctionnalité majeure pour nettoyer le code existant | `code-refactoring/commands/refactor-clean.md` |

---

### CODEBASE-CLEANUP

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/code-reviewer.md** | ➜ Utiliser pour identifier les fonctions mortes, variables inutilisées, et code redondant | `codebase-cleanup/agents/code-reviewer.md` |
| **commands/deps-audit.md** | ➜ Utiliser pour vérifier les dépendances (TailwindCDN, APIs externes) et leur version | `codebase-cleanup/commands/deps-audit.md` |

---

### COMPREHENSIVE-REVIEW

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/code-reviewer.md** | ➜ Utiliser pour les revues de code approfondies avant les versions majeures (ex: V4 → V5) | `comprehensive-review/agents/code-reviewer.md` |
| **commands/full-review.md** | ➜ Lancer avant chaque release majeure pour valider l'ensemble du code, l'UI, et les performances | `comprehensive-review/commands/full-review.md` |

---

### CONTEXT-MANAGEMENT

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/context-manager.md** | ➜ Utiliser pour maintenir le contexte de session (ville sélectionnée, thème, cache des données météo) | `context-management/agents/context-manager.md` |
| **commands/context-save.md** | ➜ Déclencher pour sauvegarder l'état de la session (dernière ville, thème) dans `localStorage` | `context-management/commands/context-save.md` |
| **commands/context-restore.md** | ➜ Utiliser pour restaurer une session précédente au chargement de la page (cache météo, ville, thème) | `context-management/commands/context-restore.md` |

---

### DEBUGGING-TOOLKIT

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/debugger.md** | ➜ Déclencher à chaque bug API (Open-Meteo), erreur de parsing des données, ou problème de rendu | `debugging-toolkit/agents/debugger.md` |
| **commands/smart-debug.md** | ➜ Utiliser pour diagnostiquer les problèmes complexes (cache corrompu, erreurs de géocodage, incohérence entre modèles) | `debugging-toolkit/commands/smart-debug.md` |
| **agents/dx-optimizer.md** | ➜ Utiliser pour améliorer l'expérience développeur (messages d'erreur clairs, feedback utilisateur, toast notifications) | `debugging-toolkit/agents/dx-optimizer.md` |

---

### DOCUMENTATION-GENERATION

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/mermaid-expert.md** | ➜ Utiliser pour générer des diagrammes d'architecture (flux des données météo, cycle de vie du cache, interaction avec les APIs) | `documentation-generation/agents/mermaid-expert.md` |
| **agents/reference-builder.md** | ➜ Utiliser pour maintenir la documentation des APIs météo (Open-Meteo endpoints, paramètres, modèles disponibles) | `documentation-generation/agents/reference-builder.md` |
| **skills/architecture-decision-records/SKILL.md** | ➜ Utiliser pour documenter les décisions techniques importantes (ex: pourquoi 3 modèles météo, pourquoi cache localStorage) | `documentation-generation/skills/architecture-decision-records/SKILL.md` |
| **skills/changelog-automation/SKILL.md** | ➜ Utiliser pour générer automatiquement le CHANGELOG entre les versions (V3 → V4) | `documentation-generation/skills/changelog-automation/SKILL.md` |

---

### ERROR-DEBUGGING

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/debugger.md** | ➜ Déclencher pour toute erreur JavaScript non capturée, surtout dans les appels API ou le traitement des données | `error-debugging/agents/debugger.md` |
| **agents/error-detective.md** | ➜ Utiliser pour les erreurs intermittentes (échec de chargement des modèles, incohérence des données entre modèles) | `error-debugging/agents/error-detective.md` |
| **commands/error-analysis.md** | ➜ Utiliser pour analyser les erreurs dans la console ou les comportements inattendus (cache corrompu, données manquantes) | `error-debugging/commands/error-analysis.md` |
| **commands/error-trace.md** | ➜ Utiliser pour tracer la propagation d'une erreur (de l'appel API à l'affichage de la carte météo) | `error-debugging/commands/error-trace.md` |

---

### FRONTEND-MOBILE-DEVELOPMENT

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/frontend-developer.md** | ➜ Déclencher pour tout développement UI, surtout responsive et tactile (cartes météo, prévisions horaires, menu de recherche) | `frontend-mobile-development/agents/frontend-developer.md` |
| **agents/mobile-developer.md** | ➜ Utiliser pour les adaptations spécifiques mobiles (touch events, viewport, reflow, gestes tactiles, safe-area) | `frontend-mobile-development/agents/mobile-developer.md` |
| **commands/component-scaffold.md** | ➜ Utiliser pour créer de nouveaux composants UI réutilisables (ex: une nouvelle carte météo, un graphique de tendances) | `frontend-mobile-development/commands/component-scaffold.md` |
| **skills/tailwind-design-system/SKILL.md** | ➜ Utiliser pour maintenir la cohérence du design system (couleurs, espacements, typographie) via TailwindCSS | `frontend-mobile-development/skills/tailwind-design-system/SKILL.md` |

---

### FRONTEND-MOBILE-SECURITY

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/frontend-developer.md** | ➜ Utiliser pour valider la sécurité du code (pas de XSS dans les templates dynamiques, sanitization des entrées utilisateur) | `frontend-mobile-security/agents/frontend-developer.md` |
| **agents/frontend-security-coder.md** | ➜ Utiliser pour valider les pratiques de sécurité frontend (CSP, sanitization des noms de villes, stockage local sécurisé) | `frontend-mobile-security/agents/frontend-security-coder.md` |
| **commands/xss-scan.md** | ➜ Lancer après l'ajout d'une nouvelle UI interactive (recherche de ville, affichage des données) pour vérifier l'absence de XSS | `frontend-mobile-security/commands/xss-scan.md` |

---

### GIT-PR-WORKFLOWS

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/code-reviewer.md** | ➜ Utiliser pour les revues de code avant chaque merge de feature branch | `git-pr-workflows/agents/code-reviewer.md` |
| **commands/pr-enhance.md** | ➜ Utiliser pour améliorer automatiquement les PR (formatage, messages de commit, tests manquants) | `git-pr-workflows/commands/pr-enhance.md` |
| **commands/git-workflow.md** | ➜ Utiliser pour gérer les workflows Git (branches, tags de version, commits) | `git-pr-workflows/commands/git-workflow.md` |

---

### JAVASCRIPT-TYPESCRIPT

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/javascript-pro.md** | ➜ Utiliser pour tout développement JavaScript, validation des bonnes pratiques ES6+, gestion des APIs asynchrones, gestion des erreurs | `javascript-typescript/agents/javascript-pro.md` |
| **skills/javascript-testing-patterns/SKILL.md** | ➜ Utiliser pour maintenir des tests (manuels ou automatisés) pour les appels API, le cache, le traitement des données, le calcul des indices | `javascript-typescript/skills/javascript-testing-patterns/SKILL.md` |
| **skills/modern-javascript-patterns/SKILL.md** | ➜ Utiliser pour moderniser le code existant (map, filter, reduce, destructuring, async/await, modules) | `javascript-typescript/skills/modern-javascript-patterns/SKILL.md` |

---

### OBSERVABILITY-MONITORING

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/performance-engineer.md** | ➜ Utiliser pour analyser les performances des appels API et du rendu des cartes météo | `observability-monitoring/agents/performance-engineer.md` |
| **agents/observability-engineer.md** | ➜ Utiliser pour mettre en place du logging et du monitoring (temps de réponse API, taux d'erreur, cache hit/miss) | `observability-monitoring/agents/observability-engineer.md` |

---

### SECURITY-COMPLIANCE

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/security-auditor.md** | ➜ Utiliser pour valider la sécurité du code (CSP, XSS, injections, stockage local sécurisé, appel API sécurisé) | `security-compliance/agents/security-auditor.md` |
| **commands/compliance-check.md** | ➜ Lancer pour vérifier la conformité RGPD (stockage des données de localisation, respect des APIs tierces) | `security-compliance/commands/compliance-check.md` |

---

### TDD-WORKFLOWS

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/tdd-orchestrator.md** | ➜ Utiliser pour structurer le développement des nouvelles fonctionnalités (Red → Green → Refactor) | `tdd-workflows/agents/tdd-orchestrator.md` |
| **commands/tdd-cycle.md** | ➜ Déclencher pour exécuter un cycle TDD complet lors de l'ajout d'une nouvelle fonctionnalité (ex: nouveau modèle météo, nouvelle visualisation) | `tdd-workflows/commands/tdd-cycle.md` |
| **commands/tdd-red.md** | ➜ Utiliser pour écrire les tests avant l'implémentation (cas d'usage : calcul du Delta T, traitement des données, indice de confiance) | `tdd-workflows/commands/tdd-red.md` |
| **commands/tdd-green.md** | ➜ Utiliser pour implémenter la fonctionnalité et passer les tests | `tdd-workflows/commands/tdd-green.md` |
| **commands/tdd-refactor.md** | ➜ Utiliser après validation des tests pour refactorer le code | `tdd-workflows/commands/tdd-refactor.md` |

---

### TEAM-COLLABORATION

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **commands/issue.md** | ➜ Utiliser pour créer des tickets de suivi (bugs, features, améliorations) lors du développement | `team-collaboration/commands/issue.md` |
| **commands/standup-notes.md** | ➜ Utiliser pour générer un résumé des avancées pour les daily meetings | `team-collaboration/commands/standup-notes.md` |

---

### UI-DESIGN

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/accessibility-expert.md** | ➜ Utiliser pour valider l'accessibilité des composants UI (contraste des cartes météo, taille des cibles tactiles, navigation) | `ui-design/agents/accessibility-expert.md` |
| **agents/design-system-architect.md** | ➜ Utiliser pour maintenir la cohérence du design system (couleurs, typographie, espacements, thème sombre) | `ui-design/agents/design-system-architect.md` |
| **agents/ui-designer.md** | ➜ Déclencher pour toute création ou modification UI (cartes météo, graphiques, prévisions horaires) | `ui-design/agents/ui-designer.md` |
| **commands/accessibility-audit.md** | ➜ Utiliser pour un audit complet de l'accessibilité de l'interface (contraste, focus, navigation clavier) | `ui-design/commands/accessibility-audit.md` |
| **commands/design-review.md** | ➜ Lancer avant chaque release majeure pour valider la cohérence visuelle de l'interface | `ui-design/commands/design-review.md` |
| **commands/create-component.md** | ➜ Utiliser pour créer de nouveaux composants UI (ex: nouvelle carte météo, graphique de tendances, indicateur de confiance) | `ui-design/commands/create-component.md` |
| **commands/design-system-setup.md** | ➜ Utiliser pour configurer le design system (couleurs, typographie, espacements, animations) | `ui-design/commands/design-system-setup.md` |
| **skills/design-system-patterns/SKILL.md** | ➜ Utiliser pour maintenir la cohérence des composants UI (cartes, boutons, sélecteurs, indicateurs) | `ui-design/skills/design-system-patterns/SKILL.md` |
| **skills/interaction-design/SKILL.md** | ➜ Utiliser pour concevoir les interactions (feedback visuel, animations de chargement, transitions) | `ui-design/skills/interaction-design/SKILL.md` |
| **skills/responsive-design/SKILL.md** | ➜ Utiliser pour valider et améliorer le responsive (mobile, tablette, desktop, safe-area) | `ui-design/skills/responsive-design/SKILL.md` |
| **skills/visual-design-foundations/SKILL.md** | ➜ Utiliser pour les fondamentaux du design (couleurs, typographie, espacements, thème clair/sombre) | `ui-design/skills/visual-design-foundations/SKILL.md` |
| **skills/web-component-design/SKILL.md** | ➜ Utiliser pour concevoir des composants UI réutilisables et modulables | `ui-design/skills/web-component-design/SKILL.md` |

---

### UNIT-TESTING

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **agents/debugger.md** | ➜ Utiliser pour déboguer les tests qui échouent (traitement des données météo, calcul du Delta T, indice de confiance) | `unit-testing/agents/debugger.md` |
| **agents/test-automator.md** | ➜ Utiliser pour automatiser les tests (appels API mockés, validation des données, cache) | `unit-testing/agents/test-automator.md` |
| **commands/test-generate.md** | ➜ Utiliser pour générer des tests unitaires pour les fonctions clés (calcul du Delta T, traitement des données, indice de confiance) | `unit-testing/commands/test-generate.md` |

---

### CODE-DOCUMENTATION (complément)

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **skills/hads/SKILL.md** | ➜ Utiliser comme référence pour les standards de documentation interne (HADS) | `documentation-standards/skills/hads/SKILL.md` |

---

### BUSINESS-ANALYTICS

| Plugin | Règle de déclenchement locale | Chemin |
|:---|:---|:---|
| **business-analytics/agents/business-analyst.md** | ➜ Utiliser pour analyser les métriques d'usage (nombre de recherches, modèles les plus consultés, taux d'erreur API) | `business-analytics/agents/business-analyst.md` |
| **business-analytics/skills/kpi-dashboard-design/SKILL.md** | ➜ Utiliser pour concevoir un tableau de bord de suivi (utilisation des modèles, performance des APIs, temps de réponse) | `business-analytics/skills/kpi-dashboard-design/SKILL.md` |

---

## 🚫 Plugins explicitement exclus

| Type | Raison |
|:---|:---|
| **Base de données** | Pas de SGBD, cache localStorage uniquement |
| **Backend / Frameworks** | Projet 100% frontend, pas de Django, FastAPI, Next.js, .NET, Java, Go, Rust, PHP, Ruby |
| **Cloud / Infrastructure avancée** | Pas de déploiement conteneurisé (Terraform, Kubernetes, Docker). Déploiement simple sur GitHub Pages/Netlify uniquement |
| **Blockchain, GameDev, Data Engineering, Machine Learning, Quant, Reverse Engineering** | Hors domaine fonctionnel |
| **SEO, Marketing, RH, Légal, Ventes** | Application météo gratuite, pas de site commercial |
| **Langages absents** | JVM, Julia, Elixir, Haskell, Shell, Bash |
| **Orchestration d'agents** | Plugin-eval, Conductor, Ship-Mate, Agent-teams — pas adapté à la taille du projet |
| **API Documentation** | `api-documenter` et `doc-generate.md` — sur une SPA Vanilla JS légère, préférer du code auto-documenté (fonctions nommées explicitement) plutôt que de générer des blocs de commentaires superflus |
| **Performance Testing** | Pas de tests de charge nécessaires |
| **Payment Processing** | Pas de système de paiement |
| **Social Publishing** | Pas de publication sur les réseaux sociaux |
| **Database Migrations** | Pas de migrations SQL nécessaires |
| **Service Mesh** | Pas de microservices, application monopage |
| **Reverse Engineering** | Pas d'analyse de binaires |

---

## 📁 Structure suggérée du projet

```
musemeteo/
├── index.html                 # Fichier principal (SPA avec TailwindCDN)
├── assets/
│   └── icons/                # Icônes SVG (Weather Icons)
├── docs/
│   ├── ADR/                  # Architecture Decision Records
│   ├── API.md                # Documentation des APIs utilisées
│   └── CHANGELOG.md
├── tests/
│   └── unit/                 # Tests unitaires (traitement des données météo)
└── .github/
    └── workflows/            # GitHub Actions (validation, déploiement)
```

---

## 🔧 Règles d'utilisation des plugins

1. **Déclencher au bon moment** : Chaque plugin a une règle de déclenchement locale spécifique. Consulter la colonne "Règle de déclenchement locale" pour savoir quand l'utiliser.

2. **Priorité** : Toujours commencer par `debugging-toolkit` en cas de bug (API, cache), `ui-design` pour le visuel, `frontend-mobile-development` pour les interactions et le responsive.

3. **Gestion des APIs** : Toujours gérer les erreurs API (timeout, 5xx, 4xx) avec des messages clairs pour l'utilisateur. Utiliser `error-debugging` pour les erreurs complexes.

4. **Cache et hors-ligne** : Prioriser la lecture du cache en cas de perte de connexion. Utiliser `context-management` pour gérer l'état de la session.

5. **Documentation** : Utiliser `code-documentation` pour commenter le code, mais privilégier le code auto-documenté (fonctions nommées explicitement, variables claires). Documenter les APIs utilisées dans `docs/API.md`.

6. **Accessibilité** : Toujours valider l'accessibilité après chaque modification UI majeure (contraste des couleurs météo, navigation clavier, lecture d'écran).

7. **Tests** : Suivre le cycle TDD pour les nouvelles fonctionnalités (Red → Green → Refactor). Tester particulièrement le traitement des données météo, le calcul des indices, et le cache.

8. **Performance** : Valider les performances des appels API (temps de réponse, taille des données) et du rendu (scrolling fluide des prévisions horaires).