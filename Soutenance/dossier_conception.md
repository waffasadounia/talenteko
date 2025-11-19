# **SOMMAIRE**

**I. Introduction à TalentÉkô**
**II. Liste de compétences**
2.1 Installer et configurer son environnement de travail
2.2 Maquetter une application
2.3 Réaliser une interface utilisateur statique et adaptable
2.4 Développer une interface utilisateur web dynamique
2.5 Mettre en place une base de données relationnelle
2.6 Développer les composants d'accès aux données SQL
2.7 Développer des composants métier côté serveur
2.8 Documenter le déploiement d'une application dynamique Web ou Mobile
**III. Résumé du projet**
**IV. Analyse détaillée des besoins**
**V. Cahier des charges**
5.1 Conceptualisation
5.2 Workflow
5.3 Maquettes
5.4 Charte graphique
5.5 Utilisateurs et user stories
5.6 Roadmap
**VI. Spécifications techniques**
6.1 Versionning
6.2 Langages, frameworks et SGBD
6.3 Sécurité
6.4 Outils
6.5 Architecture MVC
6.6 Référencement

**VII. Réalisations personnelles**
**VIII. Tests des fonctionnalités et résultats**
**IX. Déploiement** _(ajout demain)_
**X. Veille technologique**
**XI. Résolution de problèmes**
**XII. Conclusion**
**XIII. Annexes**

\pagebreak


# I. INTRODUCTION À TALENTÉKÔ

Dans le cadre de ma préparation au titre professionnel _Développeur Web et Web Mobile_, j’ai conçu et développé **TalentÉkô**, une plateforme web complète dédiée à l’échange de compétences entre particuliers.
Cette application s’inscrit dans une démarche à la fois technique, pédagogique et humaine : créer un espace où le partage, l’entraide et la mise en valeur des talents deviennent accessibles à tous.
Ce projet représente bien plus qu’un simple exercice de développement :
il s’agit d’un véritable **produit numérique**, pensé et construit selon les standards professionnels du secteur.
Il m’a permis de mobiliser l’ensemble des compétences du référentiel DWWM, depuis l’analyse du besoin utilisateur, jusqu’au déploiement final en production, en passant par la conception, l’architecture, l’ergonomie, la sécurité, le développement frontend/backend et les tests.
Dès le départ, j’ai souhaité que TalentÉkô reflète une vision forte:
-   **créer du lien entre les gens grâce à la technologie**,
-   **valoriser les talents du quotidien**,
-   **faciliter l’accès au service sans rapport d’argent**,
-   **promouvoir une économie plus humaine et collaborative**.

Cette ambition a guidé chacun de mes choix, qu’ils soient techniques, ergonomiques, graphiques ou fonctionnels.

## **Une démarche inspirée des besoins réels**
Pour concevoir TalentÉkô, je suis parti d’une problématique simple mais essentielle :

> Aujourd’hui, chacun possède un savoir-faire, une compétence ou un talent qu’il pourrait partager, mais l’échange devient difficile sans plateforme adaptée.
Beaucoup de plateformes existantes reposent sur le paiement, la commission, l’abonnement ou encore une logique marchande qui peut freiner les utilisateurs.

J’ai voulu proposer une alternative :
-   **un espace gratuit**,
-   **fondé sur le partage**,
-   **où l’on peut proposer ses compétences en échange d’une autre**,

**dans une relation équilibrée et humaine**.
Cette réflexion m’a permis de donner un **sens** au projet.
TalentÉkô n’est pas simplement une application — c’est une réponse à un besoin social :
se connecter, apprendre, aider, s’entraider.

## **Une approche professionnelle du développement**
Au-delà de l'idée, j’ai choisi d'aborder ce projet comme un véritable produit professionnel.

Cela signifie :
-   analyser les besoins des futurs utilisateurs,
-   concevoir des parcours fluides et cohérents,
-   respecter les standards UX/UI,
-   définir une architecture technique stable,
-   intégrer les bonnes pratiques de sécurité,
-   assurer une gestion propre des données,
-   tester systématiquement les fonctionnalités essentielles,
-   documenter le déploiement et la maintenance.

Cette approche m’a permis de développer des compétences essentielles pour un développeur web moderne :
capacité d’analyse, rigueur technique, sens de l’organisation, autonomie, prise de décision, qualité de développement…


## **Une identité graphique forte et accessible**
Créer une plateforme, c’est aussi concevoir une identité visuelle qui communique une intention.
J’ai donc travaillé une **charte graphique complète**, cohérente et adaptée aux enjeux d’accessibilité.

### **Pourquoi ces couleurs ?**
La palette TalentÉkô repose sur quatre couleurs principales :

⟹ **Bleu profond (#141C2E)**
- couleur de confiance, de sérénité, de stabilité
- idéale pour les headers, les titres et les éléments interactifs
- excellente lisibilité en contraste élevé

⟹ **Rouge-orangé (#D6713C)**
- couleur énergique et chaleureuse
- utilisée pour les boutons d’action et les appels visuels
- symbolise l’humain, le dynamisme et l’échange

⟹ **Sable doux (#F4D7B7)**
- couleur apaisante
- utilisée pour créer des zones respirantes, des backgrounds légers
- améliore la lisibilité en évitant les contrastes agressifs

⟹ **Orange clair (#DE8D63)**
- utilisé pour les accents et mises en valeur
- ton chaleureux qui équilibre la palette sans distraire


### **Un choix orienté accessibilité (WCAG)**
J’ai vérifié soigneusement les contrastes (AA et AAA), l’harmonie globale et la compatibilité avec le mode sombre.
Le bleu profond par exemple offre un excellent contraste contre un texte blanc, ce qui garantit:
-   une lecture confortable,
-   une bonne perception pour les daltoniens,
-   une accessibilité renforcée en mobilité.

Cette approche montre ma capacité à intégrer les normes professionnelles d’accessibilité dans mes choix graphiques.

## **Une méthodologie de travail rigoureuse**
Tout au long du projet, j’ai suivi une organisation inspirée des méthodes agiles :
-   utilisation de **Trello** pour diviser le travail en sprints,
-   priorisation des fonctionnalités par MVP,
-   travail modulaire (un module = une fonctionnalité = un ensemble de fichiers cohérents),
-   commits réguliers et propres avec Git,
-   automatisation de la qualité (Husky, lint, vérification des EOL, correction TwigCS),
-   validation test → dev → prod.

Cette démarche m’a permis de développer la maturité d’un **vrai développeur professionnel**, capable de suivre un projet de A à Z de manière autonome.

## **Un projet complet, abouti, maîtrisé**
TalentÉkô m’a permis de mettre en pratique toutes les compétences requises pour le titre DWWM :
-   conception
-   architecture
-   intégration
-   développement backend
-   sécurité
-   UX/UI
-   base de données
-   tests
-   déploiement

Mais au-delà du référentiel, ce projet m’a surtout permis de :
-   confirmer ma passion pour le développement web,
-   acquérir de véritables réflexes professionnels,
-   apprendre à voir le web comme un produit et non comme un simple code,
-   prendre confiance dans ma capacité à mener un projet complet, seule, jusqu’à son déploiement.

Cette introduction pose le cadre du dossier que vous allez découvrir :
une démarche structurée, réfléchie, argumentée et appliquée avec sérieux.
Elle reflète mon engagement envers le métier de développeur web et ma volonté constante de produire un travail propre, fiable et centré utilisateur.

\pagebreak


# **II. LISTE DE COMPÉTENCES**

La création de TalentÉkô m’a permis de mobiliser l’ensemble des compétences du référentiel “Développeur Web et Web Mobile”.
Au-delà de l’apprentissage purement technique, chaque compétence a été l’occasion d’adopter une réelle posture professionnelle : analyser un besoin, faire des choix pertinents, anticiper les usages et proposer des solutions robustes.
Dans cette section, je présente de manière détaillée la façon dont j’ai mis en œuvre chacune de ces compétences appliquées au développement de la plateforme.


## **1\. Installer et configurer son environnement de travail**
Avant même d'écrire la première ligne de code, j’ai pris le temps d’installer et de configurer un environnement de travail complet et cohérent.
C’est une étape souvent négligée par les débutants, mais elle conditionne en réalité toute la qualité du développement à venir.
Je voulais que mon environnement soit organisé, performant et le plus proche possible d’un cadre professionnel.
J’ai ainsi mis en place un environnement fondé sur Symfony 6, PHP 8.2 et MariaDB, dans une structure pensée pour isoler les différents besoins : un environnement pour le développement, un autre pour les tests et un dernier pour la production.
Cette séparation garantit une sécurité maximale et permet de développer sereinement sans risque d’impacter les données en ligne, tout en reproduisant les conditions réelles d’un workflow d’entreprise.
J’ai configuré Composer pour la gestion des dépendances, Node.js et Webpack Encore pour tout ce qui concerne le CSS et le JavaScript, et TailwindCSS comme fondation de l’interface utilisateur.
Tout a été pensé pour que le projet reste fluide à maintenir, léger à déployer et parfaitement structuré.
Enfin, j’ai installé Husky et mis en place des hooks Git afin de garantir automatiquement la qualité du code avant chaque commit.
Cette démarche traduit mon souci constant de propreté, d’organisation et de fiabilité dans mon travail.


## **2\. Maquetter une application**
La phase de maquettage représente l’un des moments les plus importants du projet.
Elle sert de transition entre l’idée et la réalisation concrète : c’est à ce moment que les intentions se matérialisent et que les choix prennent forme.
Pour TalentÉkô, j’ai commencé par analyser finement les besoins des futurs utilisateurs.
Je me suis demandé comment créer une expérience d’échange simple et intuitive, comment réduire les frictions, comment donner envie de s’inscrire, comment faciliter la navigation sur mobile, et comment faire en sorte que les utilisateurs se sentent en confiance sur une plateforme entièrement nouvelle.
J’ai donc conçu une série de maquettes qui structurent de manière claire les différents espaces du site : la page d’accueil, les pages de recherche, la fiche d’annonce, le profil utilisateur, la messagerie, l’espace de publication d’une annonce, ainsi que les formulaires de connexion et d’inscription.
Toutes ces pages ont été pensées selon une logique mobile-first, une approche moderne et parfaitement adaptée à notre époque où l’essentiel du trafic web vient du smartphone.
Au-delà de l’esthétique, les maquettes m’ont permis de prévoir les interactions, les zones de clics, les espaces respirants, la place des images, des textes, des boutons et des messages d’erreur.
C’est à partir de cette base solide que j’ai pu garantir un parcours cohérent, agréable et respectueux des critères UX.

## **3\. Réaliser une interface utilisateur statique et adaptable**
Une fois les maquettes validées, j’ai pu passer à l’intégration de l’interface statique.
Cette étape a consisté à transformer les intentions graphiques en pages HTML réelles, en utilisant Twig, HTML5 et TailwindCSS.
L’objectif était de créer une interface harmonieuse, lisible et accessible tout en restant fidèle à l’identité graphique que j’avais définie.
J’ai structuré chaque page de manière logique, en accordant une attention particulière à la hiérarchie visuelle.
Les titres ont été harmonisés, les couleurs soigneusement appliquées, les espacements équilibrés et les gabarits organisés pour optimiser la lisibilité.
Le design a été pensé pour s’adapter automatiquement à toutes les tailles d’écran : mobile, tablette, ordinateur portable et grands écrans.
Le responsive n’était pas une fonctionnalité secondaire, mais un véritable principe directeur.
L’interface repose également sur un usage raisonné des couleurs TalentÉkô, qui jouent un rôle fondamental à la fois dans l’identité visuelle et dans l’accessibilité.
Le bleu profond permet d’établir une atmosphère sérieuse et rassurante, particulièrement utile dans une plateforme basée sur l’échange entre inconnus.
Les tonalités orangées apportent quant à elles chaleur, dynamisme et humanité, ce qui équilibre l’ensemble et crée une expérience visuelle accueillante.
L’accessibilité a été au cœur de mes choix, notamment en vérifiant systématiquement les contrastes des textes, des boutons et des alertes afin de garantir une bonne lecture pour tous.

## **4\. Développer une interface utilisateur web dynamique**
Une interface statique ne suffit pas pour obtenir une expérience moderne.
TalentÉkô devait être vivant, fluide, interactif et rassurant.
Pour cela, j’ai utilisé JavaScript ES6 et Stimulus afin de créer des interactions dynamiques parfaitement intégrées à Symfony.
J’ai développé un système de validation de mot de passe en direct, utile pour guider les utilisateurs et éviter des erreurs frustrantes.
J’ai conçu un menu mobile intelligent qui gère le focus après ouverture ou fermeture, améliorant ainsi l’accessibilité pour les personnes naviguant au clavier.
J’ai mis en place un système de filtres dynamiques dans la page de recherche, permettant aux utilisateurs de visualiser immédiatement les annonces correspondant à leurs critères.
J’ai également ajouté un bandeau de “filtres actifs” qui affiche en temps réel les choix effectués, avec la possibilité de les retirer individuellement.
Ce détail, souvent négligé, améliore considérablement le confort d’utilisation et renforce la sensation de maîtrise.
J’ai aussi intégré un système de favoris, des modales accessibles, une gestion fluide des interactions sur les cartes d’annonces ainsi que plusieurs contrôleurs Stimulus destinés à traiter les interactions fines, comme les champs de formulaires, les réactions côté messagerie ou les composants personnalisés.
Tout cela donne à TalentÉkô une vraie dimension applicative moderne.

## **5\. Mettre en place une base de données relationnelle**
La base de données représente le cœur d’un projet web : elle doit être pensée avec sérieux, logique et anticipation.
Pour TalentÉkô, j’ai conçu un modèle complet basé sur MariaDB et Doctrine ORM, que j’ai matérialisé sous forme de diagramme UML.
Ce diagramme m’a permis d’organiser les relations entre les différentes entités du projet : utilisateurs, profils, annonces, images, messages, conversations, avis, favoris, échanges et même les notifications.
J’ai veillé à respecter des relations propres et efficaces, à éviter les doublons, à anticiper les contraintes d’intégrité, et à structurer une base évolutive capable d’accueillir de nombreuses fonctionnalités futures.
Chaque entité possède un rôle clair et distinct pour éviter les ambiguïtés et permettre une maintenance simple.
Ce travail porte la signature d’une démarche professionnelle.

## **6\. Développer les composants d’accès aux données SQL**
Une base de données bien conçue n’est utile que si les accès aux données sont optimisés et cohérents.
Grâce à Doctrine ORM, j’ai pu mettre en place des repositories et des requêtes adaptées aux besoins de TalentÉkô.
Il ne s’agissait pas simplement de récupérer des données, mais de le faire efficacement.
J’ai travaillé sur les jointures afin de réduire le nombre de requêtes, mis en place la pagination des annonces pour réduire la charge serveur, anticipé les tris dynamiques, et structuré les filtres avancés pour offrir aux utilisateurs une recherche précise et rapide.
Chaque requête a été pensée pour être lisible, performante et maintenable, dans une logique de qualité durable.

## **7\. Développer des composants métier côté serveur**
C’est dans cette compétence que s’exprime toute la puissance de Symfony.
J’ai structuré le backend de TalentÉkô à travers des services métiers, des contrôleurs, des formulaires et des systèmes de sécurité cohérents.
J’ai développé des fonctionnalités qui demandent une vraie compréhension du métier : gestion complète des annonces, signature d’un échange, système de messagerie interne, gestion des rôles et permissions, envoi d’email, mise en cache des images, gestion d’un tableau de bord utilisateur…
Pour chaque fonctionnalité, j’ai cherché la solution la plus robuste, la plus claire et la plus sécurisée possible.
Cela m’a permis de toucher à toutes les responsabilités d’un développeur back-end moderne : validation, logique métier, gestion des données, génération de slugs, organisation des services, sécurisation des routes et structuration des contrôleurs.
Ce travail démontre une réelle professionnalisation de ma pratique.

## **8\. Documenter le déploiement d’une application dynamique**
Enfin, une application ne peut être considérée comme aboutie que si elle peut être installée, déployée et maintenue par quelqu’un d’autre que son créateur.
C’est pourquoi j’ai rédigé une documentation complète de déploiement, expliquant chaque étape : configuration du serveur, variables d’environnement, compilation des assets, mise en cache, gestion des images, sécurité des secrets, tests après mise en production.
Cette documentation garantit que TalentÉkô peut vivre en autonomie, évoluer et être maintenu dans le temps.

\pagebreak


# **III. RÉSUMÉ DU PROJET**

TalentÉkô est une plateforme web innovante que j’ai conçue et développée dans le cadre de ma préparation au titre professionnel _Développeur Web et Web Mobile_.

Il s’agit d’un projet qui me tient particulièrement à cœur, car il répond à un besoin réel que j’ai identifié : permettre aux particuliers de partager leurs compétences et de s’entraider dans une logique d’échange plutôt que de transaction financière.
L’idée fondatrice de TalentÉkô est simple mais puissante : chacun possède des talents, que ce soit en bricolage, en informatique, en arts, en cuisine, en soutien scolaire ou en créativité.
Pourtant, il n’existe que très peu de plateformes conçues spécifiquement pour faciliter ce type d’échanges humains.
Les services disponibles sont souvent payants, orientés vers la consommation ou centrés sur la mise en relation professionnelle.
Avec TalentÉkô, j’ai souhaité proposer une alternative plus humaine, plus accessible et plus inclusive : un espace où il devient possible d’offrir son savoir-faire en échange du talent d’un autre utilisateur.
Mon objectif a été de créer une plateforme intuitive, sécurisée et agréable à utiliser, en plaçant l’expérience utilisateur au centre de chaque décision.
TalentÉkô permet ainsi à n’importe quel utilisateur de s’inscrire, de créer son profil, de publier une annonce mettant en avant ses compétences, de consulter les annonces des autres membres, d’ajouter des favoris, de discuter par messagerie interne et même de proposer un échange concret entre talents.
Pour cela, j’ai construit un ensemble de fonctionnalités cohérentes qui s’articulent autour d’un parcours utilisateur simple :
on s’inscrit, on met en avant son talent, on explore les talents des autres, on discute et on échange.
Chaque étape a été pensée pour être fluide, accessible et rassura
Par exemple, la création d’annonce a été conçue avec un formulaire clair, une gestion dynamique des images, des suggestions automatiques de catégories, et un système de validation côté serveur garantissant la qualité et la sécurité des données.
La recherche d’annonces intègre un système de filtres avancés, une gestion des favoris et un affichage des résultats en carte, permettant de visualiser rapidement les talents disponibles.
L’un des points forts du projet est la messagerie interne, qui offre un moyen simple et sécurisé de discuter entre utilisateurs spécifiques.
J’ai choisi de créer un système de threads, garantissant que chaque conversation reste lisible et organisée.
Chaque message possède sa date, son auteur, son statut, et s'affiche de manière fluide dans l’interface, offrant une expérience proche d’une application de messagerie moderne.
Cette fonctionnalité renforce le sentiment de confiance et d'engagement au sein de la communauté TalentÉkô.
Sur le plan visuel, la plateforme repose sur une charte graphique cohérente et travaillée, associant des couleurs accessibles et un style chaleureux.
Le bleu profond donne de la structure et de la crédibilité, tandis que les teintes plus chaudes apportent une dimension humaine et conviviale.
Le design a été conçu pour être mobile-first, avec l’objectif que l’interface soit aussi agréable sur smartphone que sur ordinateur.
Chaque composant, du bouton au formulaire, a été pensé pour créer un sentiment d’harmonie et de simplicité.
Sur le plan technique, TalentÉkô repose sur un socle robuste : Symfony 6, Twig, Doctrine, TailwindCSS, Stimulus et Webpack Encore.
Ce choix n’est pas dû au hasard : Symfony me permet de travailler avec une architecture MVC solide, un système de routes flexible, une gestion sécurisée des utilisateurs, une validation poussée des données, et des services métiers parfaitement organisés.
Doctrine assure une gestion propre de la base de données, avec des entités bien définies, des relations maîtrisées et des migrations versionnées.
Twig me donne la possibilité de structurer les vues proprement, tandis que TailwindCSS facilite la création d’interfaces modernes et accessibles.
Enfin, Stimulus apporte une touche de dynamisme parfaitement intégrée à l’écosystème Symfony.
Un autre aspect essentiel du projet est la sécurité.
J’ai veillé à protéger l’ensemble des routes sensibles, à mettre en place un système de rôles (utilisateur, modérateur, administrateur), à sécuriser les formulaires avec des jetons CSRF, à valider chaque champ avec rigueur et à protéger l’accès aux données privées grâce à des voters et à des règles d’accès strictes.
La plateforme a été pensée pour être fiable, même lorsque plusieurs utilisateurs interagissent simultanément.
Enfin, TalentÉkô est un projet déployé en conditions réelles.
J’ai rédigé un guide complet de déploiement, permettant de préparer l’environnement de production, de configurer les variables, de compiler les assets, d’optimiser les images, de nettoyer le cache et d’effectuer les vérifications nécessaires avant la mise en ligne.
Ce guide garantit que l’application peut être installée sur n’importe quel serveur compatible et fonctionner de manière stable et performante.
TalentÉkô est un projet complet, cohérent et professionnel.
Il témoigne de ma capacité à mener une application du concept à la production, en passant par toutes les étapes indispensables : analyse du besoin, conception fonctionnelle, maquettage, intégration, développement, tests, sécurité, accessibilité, optimisation, documentation et déploiement.
Ce résumé reflète l’essence de mon travail : sérieux, autonomie, qualité et sens du détail.
Il illustre également ma motivation à développer des solutions utiles, humaines et bien construites, capables d’avoir un impact concret pour leurs utilisateurs.

\pagebreak


# **IV. Analyse détaillée des besoins du projet**

Avant de commencer le développement de TalentÉkô, j’ai pris le temps d’analyser en profondeur les besoins réels du projet, qu’ils soient liés aux futurs utilisateurs, au métier, aux fonctionnalités essentielles, ou encore aux contraintes techniques et légales.
Cette étape a été déterminante, car elle m’a permis de construire une solution cohérente, viable, sécurisée, et réellement adaptée aux usages que j’avais imaginés.
TalentÉkô n’est pas né d’une suite de fonctionnalités assemblées au hasard : il est le résultat d’une réflexion structurée qui a guidé tout le cycle de conception.



## **1\. Compréhension des utilisateurs et définition des personas**
Pour concevoir une plateforme utile, j’ai commencé par analyser les profils types qui pourraient réellement utiliser TalentÉkô.
Cette démarche m’a aidée à comprendre leurs attentes, leurs motivations, leurs contraintes et leurs comportements face à une application d’échange de services.
J’ai imaginé des personas représentatifs, comme Julie, jeune femme créative qui souhaite transmettre son savoir en dessin tout en trouvant quelqu’un pour l’aider en bricolage.
Ou encore Marc, autodidacte passionné d’informatique, qui propose ses réparations et cherche à progresser en cuisine.
Ou Anna, développeuse organisée, qui souhaite offrir une aide administrative et, en échange, apprendre la guitare.
Ces profils m’ont permis d’incarner les besoins réels derrière la plateforme : des personnes différentes, avec des compétences variées, mais qui partagent toutes l’envie d’échanger, d’apprendre et de s’entraider.
Grâce à cette analyse, j’ai pu cibler les attentes principales : une plateforme simple, rassurante, intuitive, où l’on peut trouver rapidement quelqu’un de sérieux et avec qui l’on peut réellement échanger une compétence.

## **2\. Analyse des besoins utilisateurs**
À partir de ces personas, j’ai identifié les besoins essentiels auxquels le site devait répondre.
Les utilisateurs doivent pouvoir créer un profil en quelques minutes, présenter clairement leurs compétences, consulter des annonces proches de chez eux, échanger des messages de façon fluide et sécurisée, proposer des échanges et garder une trace de leurs interactions.
Ils ont également besoin de gérer leurs annonces, de les modifier, de les rendre visibles ou invisibles, et de suivre leurs propositions en cours.
Ces besoins semblent simples au premier abord, mais ils impliquent en réalité une architecture solide, des entités claires, un workflow bien pensé et une interface structurée.
J’ai aussi constaté que la sécurité était un besoin utilisateur avant d’être une contrainte technique : personne ne veut recevoir un message anonyme, ni voir ses données exposées.
C’est ce qui m’a amenée à concevoir une messagerie entièrement interne, protégée par les voters et les rôles, et à éviter tout échange de coordonnées personnelles dans les premières étapes.

## **3\. Besoins métier et cadre fonctionnel**
Au-delà des besoins des utilisateurs, j’ai analysé les besoins métier liés au fonctionnement de la plateforme.
TalentÉkô doit garantir un environnement sûr, capable de modérer les contenus, de gérer efficacement les catégories de compétences, d’assurer l’unicité des annonces et de structurer toutes les données de manière normalisée.
J’ai également anticipé des besoins futurs comme la mesure de l’activité générale, la gestion de statistiques, ou l’évolution de la plateforme vers des fonctionnalités plus avancées.
L’enjeu était aussi d’imaginer un système capable de gérer un volume important d’interactions : annonces, favoris, conversations, échanges…
Cette vision métier a guidé la création de mon UML, la normalisation des entités et les règles qui encadrent chaque action.

## **4\. Définition du MVP et vision d’évolution**
Pour structurer mon développement, j’ai défini un MVP clair.
Il devait inclure tout ce qui est indispensable pour que TalentÉkô soit fonctionnel : l’inscription, la connexion, les profils complets, la gestion des annonces, la recherche filtrée, les favoris, la proposition d’échange, la messagerie et le tableau de bord utilisateur.
L’idée était de construire un cœur solide, stable et cohérent, tout en évitant de disperser mes efforts.
Une fois ce socle défini, j’ai également imaginé des fonctionnalités post-MVP, comme un système de crédits, des badges, des notifications en temps réel ou encore la géolocalisation automatique.
Ces idées montrent la capacité du projet à évoluer dans le futur, tout en gardant une direction claire dès le départ.

## **5\. Règles de gestion et cadre logique**
L’analyse des besoins m’a aussi amenée à définir des règles strictes pour garantir la cohérence du système.
Par exemple, seule une personne authentifiée peut proposer un échange ou envoyer un message.
Chaque annonce doit être liée à un seul utilisateur.
Les conversations doivent être regroupées par threads pour éviter les doublons.
Les slugs ne peuvent pas être entièrement numériques afin d’assurer leur unicité.
Et les routes sensibles ne doivent être accessibles qu’en authentification complète.
Ces règles ont structuré toute la logique métier du site, en évitant très tôt les incohérences et en assurant une expérience stable pour l’utilisateur.

## **6\. Contraintes légales, techniques et accessibilité**
La conception d’une plateforme d’échange implique des contraintes légales, notamment le respect du RGPD : minimisation des données, transparence, possibilité de suppression du compte et protection des informations personnelles.
J’ai également intégré dès le début des contraintes d’accessibilité :
des contrastes conformes WCAG, une navigation clavier complète, des labels explicites et des messages d’erreur clairs.
Cette démarche a guidé l’intégration de la charte graphique et a influencé la structure même de certains formulaires.
D’un point de vue technique, la plateforme devait rester performante, optimisée et adaptée au responsive design.
La charte graphique a été pensée pour être accessible, moderne et facilement adaptable au mode sombre et aux variations d’écran.

## **7\. Synthèse : une base solide avant de coder**
Cette analyse approfondie des besoins a constitué la fondation de tout le développement de TalentÉkô.
Elle m’a permis de structurer une architecture claire, de définir une base de données cohérente, d’imaginer une UX fluide et de prévoir l’évolution future du projet.
Grâce à ce travail en amont, chaque fonctionnalité développée avait un sens, un objectif et une place précise dans l’ensemble.
TalentÉkô n’est pas seulement un projet technique : c’est un produit pensé pour répondre à des usages réels, encadré par une logique métier solide et conçu avec une vision long terme.

\pagebreak


# **V. Cahier des charges**

Le cahier des charges représente l’un des documents les plus importants du projet TalentÉkô.
Il constitue le point de départ de toute la démarche de conception et permet de poser un cadre clair, précis et partagé.
Il répond à une logique simple : avant de développer une application, il faut savoir ce que l’on construit, à qui elle s’adresse, pourquoi elle existe, quelles fonctionnalités elle contient et comment elle doit fonctionner.
Ce document n’est pas seulement une liste d’exigences ; il reflète une véritable réflexion sur les besoins utilisateurs, les contraintes techniques, l’ergonomie, la sécurité, la cohérence graphique et les objectifs du produit.
Dans le cas de TalentÉkô, le cahier des charges a également été un outil d’organisation essentiel, car il m’a permis de structurer mon travail en étapes, de prioriser les fonctionnalités pour définir un MVP pertinent et d’assurer une cohérence tout au long du développement.
Il a servi de fil conducteur, garantissant que chaque fonctionnalité développée répondait à un besoin réel et s’intégrait parfaitement à l’ensemble.

## **1\. La conceptualisation**
La conceptualisation de TalentÉkô a débuté par une analyse des usages et des comportements actuels autour de l’échange de services.
J’ai observé qu’il existe aujourd’hui une forte demande d’entraide et de partage entre particuliers, mais que les solutions disponibles restent souvent fragmentées ou orientées finance.
Les plateformes actuelles ne proposent pas de véritable système d’échange équilibré : elles reposent principalement sur la monétisation ou sur un modèle exclusivement professionnel.
J’ai donc imaginé un concept différent : une plateforme centrée sur l’humain, basée sur la valorisation de talents parfois invisibles, mais pourtant précieux.
L’idée était de permettre à quelqu’un qui sait cuisiner d'échanger avec quelqu’un qui sait repeindre un mur, de permettre à un passionné d’informatique d’aider quelqu’un en dessin, ou encore de mettre en relation une personne qui cherche un cours de guitare avec quelqu’un qui pourrait avoir besoin de conseils administratifs.
Cette réflexion m’a permis de structurer les piliers fondateurs de TalentÉkô :

une plateforme gratuite, accessible, intuitive, moderne, sécurisée et capable de générer une relation de confiance entre les utilisateurs.
À partir de cette vision, j’ai défini le rôle principal de l’application : devenir un espace central où il est possible de trouver, proposer et échanger des compétences de manière simple et directe.
Pour que cette idée prenne forme, il m’a fallu imaginer le parcours utilisateur.
Je me suis demandé comment guider l’utilisateur dès son arrivée sur le site, comment lui donner envie de s’inscrire, comment l’encourager à créer une annonce, comment le rassurer lorsqu’il discute avec une autre personne, et comment faciliter l’échange final.
Cette démarche m’a aidée à comprendre les étapes clés de la plateforme, et donc à définir les fonctionnalités essentielles du MVP.


## **2\. Le workflow**
Le workflow de TalentÉkô a été pensé autour d’un parcours simple, naturel et logique.
Mon objectif était que n’importe quel utilisateur, même peu à l’aise avec le numérique, puisse comprendre immédiatement comment fonctionne la plateforme et se sentir guidé sans jamais être perdu.
J’ai structuré ce parcours en plusieurs étapes cohérentes :
l’arrivée sur la page d’accueil, l’exploration des annonces, l’inscription, la création du profil, la publication d’une compétence, la recherche de talents, la consultation des fiches d’annonce, l’ajout en favoris, la discussion via la messagerie et l’échange final.
J’ai veillé à ce que chaque transition soit fluide.
Par exemple, la page d’accueil met immédiatement en avant la recherche, car c’est la fonction principale.
L’utilisateur peut commencer à explorer le site sans compte, ce qui réduit la barrière d’entrée.
Ce n’est qu’au moment d’envoyer un message ou de proposer un échange que l’application invite naturellement à s’inscrire.
Cette conception s’inspire des pratiques modernes d’UX, qui consistent à ne jamais forcer un utilisateur à s’engager trop tôt, mais à l’accompagner progressivement.
Le workflow inclut également la gestion complète de la messagerie interne.
J’ai souhaité que chaque conversation soit claire et structurée, comme dans une véritable application de chat.
La création d’un thread pour chaque discussion permet de garantir un suivi propre, où l’historique est conservé, lisible et sécurisé.
Enfin, la partie “échange” représente la finalité du workflow.
J’ai imaginé un système simple où l’utilisateur peut proposer un échange, signaler son intérêt pour une annonce, discuter des modalités, puis finaliser l’accord.
Même si cette partie peut évoluer en V2, elle est déjà fonctionnelle et intégrée intelligemment au parcours global.


## **3\. Les maquettes**
La réalisation des maquettes a été une étape déterminante dans l'élaboration de TalentÉkô.
C’est en donnant une forme concrète au projet que j’ai pu anticiper les besoins ergonomiques, les contraintes techniques et la cohérence graphique de l’ensemble.
J’ai conçu les maquettes avec Figma, en adoptant une approche mobile-first.
Cette méthodologie m’a permis d’assurer que l’application soit parfaitement utilisable sur smartphone, ce qui est indispensable pour une plateforme destinée à être consultée en mobilité.
Chaque page a été pensée pour refléter la personnalité de TalentÉkô : accueillante, chaleureuse, moderne et facile à comprendre.
J’ai porté une attention particulière aux espaces respirants, aux zones d’interaction, aux boutons accessibles et à la hiérarchie visuelle des contenus.
La page d’accueil a été conçue pour inspirer confiance dès le premier regard : un titre clair, une recherche centrale, des actions immédiates et un design cohérent.
Les pages d’inscription et de connexion ont été travaillées pour être simples et efficaces, en évitant toute surcharge visuelle.
Les pages d’annonces ont été pensées comme des cartes visuelles où chaque compétence apparaît avec une image, un titre, une localisation et des informations clés.
Le but était de rendre la lecture rapide et agréable, tout en donnant envie d’aller plus loin dans la découverte du talent.
Ces maquettes ont guidé l’intégration frontend et ont permis de détecter très tôt les éventuels problèmes de cohérence, de structure ou d’ergonomie.


## **4\. La charte graphique**
La charte graphique de TalentÉkô constitue l’une des fondations identitaires du projet.
Elle ne se limite pas à un choix esthétique ; elle constitue un véritable langage visuel qui permet de transmettre les valeurs du produit.
Son rôle est de soutenir la compréhension, d’améliorer l’expérience utilisateur et de rendre chaque interaction cohérente et mémorable.
J’ai choisi une palette de couleurs soigneusement équilibrée entre confiance et humanité.
Le bleu profond est devenu la couleur principale, utilisée pour les titres, les zones structurantes, les éléments interactifs.
Il inspire la stabilité et la fiabilité, deux qualités essentielles pour une plateforme d’échange.
Pour contrebalancer cette tonalité sérieuse, j’ai introduit des nuances chaudes, comme l’orange doux et le sable, qui apportent une dimension humaine et chaleureuse.
Cette combinaison crée un univers visuel accueillant, dynamique et accessible.
L’accessibilité a guidé tous mes choix.
J’ai vérifié les contrastes selon les normes WCAG, en m’assurant que chaque couleur utilisée permettait une lecture confortable, même pour les personnes souffrant de troubles de la vision.
J’ai également intégré le mode sombre, afin d’offrir une expérience moderne et plus reposante pour les yeux.
La typographie repose sur des polices lisibles et élégantes, soigneusement choisies pour leur clarté et leur cohérence avec l’identité du site.
J’ai veillé à ce que les titres soient expressifs, les textes lisibles, et que l’ensemble dégage une impression professionnelle et harmonieuse.
L’identité graphique se manifeste également dans les composants :
la forme arrondie des boutons, les cartes avec ombrages légers, les menus épurés, les formulaires espacés.
Tout a été pensé pour offrir une expérience agréable, intuitive et moderne.

## **5\. Les utilisateurs et leurs user stories**
L’une des étapes essentielles du cahier des charges a été de définir clairement les différents profils d’utilisateurs.
TalentÉkô s’adresse à un public large, mais chacun interagit avec la plateforme d’une manière spécifique.
J’ai donc identifié plusieurs rôles : les visiteurs non connectés, les utilisateurs inscrits, les modérateurs et les administrateurs.
Chacun possède ses propres besoins, ses motivations et ses interactions privilégiées.
Pour structurer ces besoins, j’ai rédigé un ensemble de user stories permettant de définir précisément ce que chaque utilisateur veut accomplir sur le site.
Par exemple, un visiteur doit pouvoir parcourir les annonces librement, un utilisateur inscrit doit pouvoir publier sa propre annonce ou envoyer un message, un modérateur doit pouvoir gérer des contenus signalés, et un administrateur doit pouvoir superviser l’ensemble de la plateforme.
Ces user stories m’ont aidée à établir le périmètre fonctionnel du projet et à prioriser le développement.
Elles constituent un outil très efficace pour aligner la technique avec le besoin réel et éviter de développer des fonctionnalités inutiles ou mal calibrées.


## **6\. La roadmap**
Pour mener ce projet de manière structurée et professionnelle, j’ai établi une roadmap divisée en sprints.
Cette méthode inspirée de l’agilité m’a permis d’avancer étape par étape, d’évaluer le temps nécessaire pour chaque fonctionnalité, et de maintenir une vision claire de l’évolution du projet.
La roadmap a débuté par la mise en place de l’environnement et la création du socle technique, puis s’est poursuivie par le développement de l’authentification, des profils, des annonces, de la recherche, de la messagerie et enfin du système d’échange.
Les fonctionnalités ont été développées dans un ordre logique, avec des priorités clairement définies pour donner naissance au MVP.
Une fois ce socle fonctionnel construit, j’ai pu ajouter des fonctionnalités complémentaires, améliorer l’UX et intégrer des éléments de confort comme le mode sombre, les avatars automatiques et les animations légères.
La roadmap a joué le rôle de guide stratégique : elle m’a aidée à prendre des décisions, à gérer ma charge de travail et à garantir un développement progressif mais complet.
\pagebreak


# **VI. Spécifications techniques**

Le développement de TalentÉkô repose sur un ensemble de choix techniques faits avec réflexion et cohérence.
Lorsqu’on conçoit une application web destinée à être utilisée par un large public, il est essentiel de sélectionner une architecture robuste, des outils fiables et des technologies pérennes.
Chaque décision technique doit être en accord avec les objectifs du projet, tout en offrant une expérience utilisateur fluide, une maintenance facile et une évolutivité naturelle.
Dans cette section, je présente en détail l’ensemble des choix techniques qui ont guidé la création de TalentÉkô, en expliquant à chaque fois les raisons qui ont motivé ces décisions.

## **1\. Le versionning**
Dès le début du projet, j’ai fait le choix d’utiliser Git comme système de contrôle de version.
Il ne s’agit pas seulement d’un outil de sauvegarde, mais d’un véritable partenaire qui accompagne chaque étape du développement.
Grâce à Git, j’ai pu structurer mon travail, suivre l’évolution du code, revenir en arrière en cas de besoin et travailler de manière propre et organisée.
J’ai hébergé le projet sur GitHub, ce qui m’a permis de profiter d’un espace de stockage sécurisé, de l’historique complet des commits et des fonctionnalités de collaboration.
Même si j’ai développé seule, j’ai appliqué des bonnes pratiques professionnelles telles que des messages de commit clairs et explicites, une séparation logique des tâches et une organisation régulière de mon dépôt.
Pour garantir la qualité du code, j’ai également installé Husky afin de mettre en place des hooks qui vérifient automatiquement la syntaxe PHP, le formatage des fichiers, l’absence de BOM et la propreté globale du commit avant qu’il ne soit validé.
Ces automatismes traduisent mon souci d’adopter une rigueur professionnelle et d’assurer un code impeccable sur la durée.
Le versionning a joué un rôle central dans la stabilité du projet : il m’a permis d’expérimenter, d’avancer sereinement et d’isoler les évolutions tout en garantissant que le socle du projet restait solide et maîtrisé.

## **2\. Langages, frameworks et système de gestion de données (SGBD)**
TalentÉkô repose sur un socle technique moderne et performant.
Le choix de Symfony n’est pas un hasard : c’est un framework réputé pour sa fiabilité, sa structure rigoureuse, son système de sécurité avancé et son intégration naturelle avec Doctrine ORM.
En optant pour Symfony 6, j’ai pu bénéficier d’outils puissants tels que le système de routes, les formulaires, les services, la validation des données, les contrôleurs structurés et le moteur de template Twig.
Twig, justement, m’a permis de créer une interface claire, organisée et totalement décorrélée de la logique métier, ce qui assure une propreté exemplaire du code.
Grâce à lui, j’ai pu structurer des layouts, réutiliser des composants visuels, harmoniser l’esthétique du site et séparer de manière nette l’affichage du reste du projet.
Pour le CSS, j’ai choisi TailwindCSS, qui s’est révélé être un atout majeur.
Plutôt que d’écrire des fichiers CSS interminables, Tailwind permet de construire des interfaces en combinant des classes courtes et expressives.
Ce système m’a aidée à gagner en efficacité, à garantir la cohérence graphique et à réduire le poids global du projet.
Couplé à Webpack Encore, il m’a permis de gérer facilement les assets, de minifier les fichiers, de gérer les sources JS et de compiler l’ensemble dans un build propre et optimisé.
Le JavaScript utilisé dans TalentÉkô repose principalement sur ES6 moderne, enrichi par Stimulus, un micro-framework léger et parfaitement intégré à Symfony.
Stimulus m’a permis de dynamiser l’interface sans transformer le site en SPA, ce qui correspond exactement aux besoins du projet : fluidité, performance et simplicité de maintenance.
Du côté des données, MariaDB a été le choix idéal.
C’est un SGBD performant, compatible avec Symfony et Doctrine, extrêmement stable et très répandu dans le monde professionnel.
Sa structure relationnelle permet de gérer efficacement les relations entre utilisateurs, annonces, favoris, messages, images et autres entités essentielles de TalentÉkô.
L’ensemble de ces choix technologiques crée un environnement cohérent, durable et adapté aux besoins d’une application web moderne, tout en respectant les bonnes pratiques du métier.

## **3\. La sécurité du site**
La sécurité est un enjeu majeur dans toute application web, mais elle l’est encore davantage lorsqu’il s’agit d’une plateforme d’échange où les utilisateurs interagissent, expriment leurs besoins et partagent des informations personnelles.
J’ai donc porté une attention particulière à cet aspect tout au long du projet.
La première couche de sécurité réside dans l’authentification.
J’ai mis en place un système complet basé sur les composants de sécurité de Symfony, avec gestion des mots de passe hachés, formulaires sécurisés et validation systématique des données.
Le système de connexion utilise les standards modernes du framework et protège les comptes en empêchant les attaques par force brute ou l’usurpation de sessions.
Les rôles utilisateurs ont également été définis pour segmenter l’accès aux différentes sections du site.
Les actions sensibles, telles que la modification d’une annonce ou la gestion des profils, sont exclusivement réservées aux utilisateurs authentifiés.
Les fonctionnalités d’administration sont quant à elles protégées par des rôles spécifiques, garantissant que seules les personnes autorisées peuvent accéder au back-office.
Les formulaires sont tous protégés contre les attaques CSRF, ce qui empêche les envois frauduleux.
J’ai également mis en place une validation stricte, destinée à empêcher les injections SQL, les caractères dangereux et les erreurs de saisie.
Pour ce qui concerne les accès plus subtils, comme la consultation d’un message, la modification d’une annonce ou l’accès à un profil particulier, j’ai utilisé les Security Voters, qui permettent de vérifier en profondeur si l’utilisateur a le droit d’effectuer une action donnée.
Cela garantit une sécurité totale au niveau métier.
Enfin, j’ai contrôlé la qualité et la sécurité des fichiers uploadés, notamment les images.
J’ai utilisé LiipImagine pour les convertir, les redimensionner et éviter les formats dangereux, tout en optimisant leur poids.
Cette approche garantit une expérience fluide pour les utilisateurs, tout en protégeant l’application contre les risques liés aux fichiers malveillants.
La sécurité est ainsi garantie à plusieurs niveaux, rendant TalentÉkô fiable, robuste et prêt à être utilisé en conditions réelles.

## **4\. Les outils**
Pour mener à bien ce projet, j’ai utilisé un ensemble d’outils professionnels qui m’ont permis de travailler efficacement, proprement et en respectant les standards du développement moderne.
PhpStorm a été mon IDE principal, car il offre une intégration poussée avec Symfony, une excellente gestion des dépendances et des outils puissants pour analyser et nettoyer le code.
Sa capacité à détecter les erreurs avant même l’exécution m’a permis d’éviter de nombreux problèmes.
Figma a été utilisé pour concevoir les maquettes et préparer les fondations visuelles de l’application.
Cet outil de design moderne m’a permis d’anticiper les besoins visuels, d’améliorer l’UX et de m’assurer que chaque page offrait une navigation claire et intuitive.
J’ai également utilisé GitHub pour héberger le code, documenter les évolutions et garantir un espace sécurisé et organisé pour le développement.
phpMyAdmin m’a servi à visualiser et ajuster la base de données au cours du développement.
Enfin, j’ai utilisé plusieurs outils de qualité de code, dont Husky, Prettier et TwigCS, qui garantissent une cohérence et une propreté exemplaire du projet.
Ils reflètent ma volonté d'adopter une démarche de développement professionnelle et durable.

## **5\. Architecture MVC**
TalentÉkô repose sur une architecture MVC claire et respectueuse des meilleures pratiques de Symfony.
Ce modèle sépare les responsabilités : les contrôleurs gèrent la logique du flux, les modèles représentent les données et les vues affichent le rendu final.
Cette structure apporte une lisibilité idéale, une maintenance aisée et une évolutivité naturelle.
Les contrôleurs orchestrent les actions, récupèrent les données nécessaires, appellent les services appropriés et renvoient les réponses aux vues.
Les entités Doctrine représentent fidèlement la structure de la base de données, garantissant une manipulation simple et cohérente des données.
Les templates Twig s’occupent de la partie visuelle, permettant de séparer clairement la logique métier de l’interface utilisateur.
Cette architecture a permis de créer un code propre, modulaire et facile à faire évoluer.
Elle constitue une base solide pour l’ajout de futures fonctionnalités, comme un système de notation avancé, une messagerie en temps réel ou un espace dédié aux modérateurs.

## **6\. Le référencement**
Même si TalentÉkô n’est pas destiné à un déploiement public à grande échelle dans le cadre de la soutenance, j’ai tenu à respecter les bonnes pratiques de référencement (SEO) afin d’offrir une application techniquement propre et optimisée.
Le site utilise des URLs claires et structurées, basées sur des slugs lisibles.
Les balises méta ont été travaillées pour offrir un rendu correct lors du partage sur les réseaux sociaux.
Le code HTML est propre, sémantique et hiérarchisé de manière cohérente.
J’ai veillé à optimiser les performances en limitant les requêtes inutiles, en compressant les images, en minifiant les assets et en utilisant efficacement le cache.
Ces choix techniques contribuent à améliorer l’expérience utilisateur tout en rendant l’application plus performante.
TalentÉkô a été pensé pour être visible, léger, rapide et agréable à utiliser, même sur des connexions limitées.
\pagebreak


# **VII. Réalisations personnelles**

L’un des aspects les plus enrichissants du développement de TalentÉkô a été la possibilité de mettre en pratique l’ensemble des compétences acquises durant ma formation et d’aller encore plus loin grâce aux nombreux défis rencontrés.
Tout au long du projet, j’ai pu concevoir, intégrer, développer et optimiser des fonctionnalités complètes, en veillant toujours à adopter une démarche structurée, rigoureuse et orientée utilisateur.
Cette section met en lumière les réalisations dont je suis la plus fière, celles qui illustrent de manière concrète ma progression et ma capacité à mener un développement du début à la fin, depuis la réflexion jusqu’à la mise en production.

## **1\. Le système complet de création d’annonce**
Parmi les fonctionnalités phares de TalentÉkô, la création d’une annonce constitue un élément central.
J’ai souhaité que cette étape soit simple, agréable et accessible, car elle représente l’entrée du talent dans l’écosystème de la plateforme.
Pour cela, j’ai conçu un formulaire structuré qui permet à l’utilisateur de mettre en avant ses compétences de manière claire et professionnelle.
Il peut renseigner un titre, une description, une catégorie, une localisation, un niveau d’expérience éventuel ainsi qu’une ou plusieurs images illustrant son talent.
J’ai mis en place une validation rigoureuse de chaque champ, de manière à éviter les données incomplètes, imprécises ou incohérentes.
La gestion des images a été l’un des aspects techniques les plus intéressants.
J’ai configuré un système d’upload sécurisé, associé à un traitement automatique des visuels grâce à LiipImagine.
Chaque image est redimensionnée, compressée et recadrée afin de garantir une qualité optimale tout en réduisant le poids des fichiers.
Ce processus améliore les performances du site et participe à une meilleure expérience utilisateur, notamment sur mobile.
J’ai également créé un slug automatique basé sur le titre de l’annonce.
Ce procédé permet d’obtenir des URL lisibles, adaptées au référencement et faciles à partager.
Cette étape n’est pas simplement technique : elle reflète une démarche de structuration du contenu, essentielle pour la clarté et la cohérence du site.
Enfin, j’ai intégré une interface visuelle soignée, correspondant exactement aux maquettes, avec des espacements équilibrés, des labels lisibles, une hiérarchie visuelle claire et un design cohérent avec la charte graphique TalentÉkô.
Tout cela contribue à rendre la publication d’une annonce agréable et intuitive, même pour un utilisateur novice.

## **2\. Le système de messagerie interne**
La messagerie a été l’un des modules les plus complexes et les plus enrichissants à développer.
Elle représente un point de rencontre essentiel entre les utilisateurs, puisqu’elle leur permet de discuter, d’échanger des informations et de construire la relation nécessaire avant un échange de compétences.
J’ai choisi d’organiser la messagerie autour d’un système de threads, où chaque conversation est associée à un groupe de participants unique.
Cette structure permet d’éviter les doublons, de centraliser les messages et de conserver une cohérence dans les échanges.
Chaque message est associé à son auteur, à une date et à un statut, assurant un suivi propre.
L’interface utilisateur est inspirée des applications de messagerie modernes.
J’ai travaillé l’affichage des bulles, la distinction entre les messages envoyés et reçus, les timestamps et la lisibilité globale.
J’ai également veillé à ce que l’expérience soit fluide : lorsqu’un utilisateur envoie un message, il est automatiquement redirigé vers le bas du fil de discussion pour conserver une lecture naturelle.
Au niveau technique, la messagerie demande un contrôle strict des permissions.
J’ai développé des Security Voters qui vérifient que seuls les participants peuvent accéder à une conversation ou envoyer un message.
Cette étape a renforcé ma compréhension de la sécurité et m’a permis d’appliquer les principes de protection des données de manière concrète.
Grâce à cette fonctionnalité, TalentÉkô devient un véritable espace d’échange, bien plus qu’un simple catalogue d’annonces.

## **3\. Le système de favoris et les interactions utilisateurs**
Une autre fonctionnalité que j’ai entièrement développée est le système de favoris.
Il permet aux utilisateurs de conserver les annonces qui les intéressent, d’organiser leur recherche et de revenir plus facilement vers les compétences les plus pertinentes pour eux.
J’ai conçu un système simple et efficace : un clic sur un cœur permet d’ajouter ou de retirer une annonce des favoris de l’utilisateur.
Cette interaction est fluide, intuitive et intégrée directement dans les cartes d’annonces.
J’ai également ajouté des animations légères permettant de rendre l’expérience plus agréable.
Au niveau technique, cette fonctionnalité repose sur une entité dédiée qui associe un utilisateur à une annonce.
J’ai veillé à empêcher les doublons, à vérifier que l’utilisateur est bien authentifié avant d’effectuer certaines actions et à afficher les favoris uniquement pour le compte connecté.
Cette approche garantit un fonctionnement fiable et sécurisé.
Grâce à ce système, TalentÉkô offre une véritable dimension personnalisée, permettant aux utilisateurs de construire leur propre parcours et de suivre leurs annonces préférées en quelques clics.

## **4\. Le module de recherche et de filtrage avancé**
Le moteur de recherche est l’un des composants que j’ai le plus travaillé, car il constitue le cœur de l’expérience utilisateur.
Il permet à chacun de trouver précisément la compétence dont il a besoin, en fonction de critères variés comme la catégorie, la localisation ou les mots-clés.
J’ai conçu un système de requêtes optimisées grâce à Doctrine, avec jointures et conditions dynamiques.
Le filtrage s’adapte automatiquement aux choix de l’utilisateur, sans recharger inutilement des données ou effectuer des requêtes coûteuses.
J’ai aussi intégré un bandeau intitulé “filtres actifs”, qui s’affiche dès que l’utilisateur utilise un critère.
Ce bandeau permet de visualiser instantanément les filtres appliqués et de les retirer individuellement en un seul clic.
Cette fonctionnalité n’est pas seulement esthétique : elle répond à un besoin réel de transparence et de confort dans la navigation.
Ce module améliore significativement l’expérience utilisateur, car il donne une impression de maîtrise et rend la recherche rapide, claire et agréable.

## **5\. Le tableau de bord utilisateur**
Afin de centraliser toutes les actions importantes de l’utilisateur, j’ai développé un tableau de bord complet qui regroupe ses annonces, ses messages, ses échanges et ses paramètres de compte.
Cette interface a été conçue pour offrir une vue d’ensemble claire et hiérarchisée de toutes les activités de l’utilisateur sur la plateforme.
J’ai structuré ce tableau en sections distinctes, tout en veillant à conserver une cohérence visuelle avec le reste du site.
L’utilisateur peut rapidement accéder à son profil, gérer ses annonces, suivre ses discussions ou vérifier l’état de ses échanges en cours.
Chaque partie a été pensée pour être compréhensible en un coup d’œil et suffisamment flexible pour évoluer à l’avenir.
Le tableau de bord est le reflet de ma capacité à organiser des informations complexes de manière intuitive et structurée.


## **6\. L’optimisation, la qualité de code et la gestion des assets**
Un point que j’ai particulièrement travaillé est l’optimisation du projet.
J’ai configuré Webpack Encore pour compresser les fichiers CSS et JavaScript, générer des bundles propres et améliorer la vitesse de chargement.
J’ai intégré Tailwind de manière complète, en utilisant toutes ses possibilités pour réduire le code inutile et optimiser le CSS final.
J’ai également mis en place plusieurs commandes Symfony pour automatiser des tâches comme la vérification des images, la correction des slugs ou la préparation des fichiers avant le déploiement.
Cette démarche montre ma capacité à dépasser le simple développement fonctionnel pour atteindre un niveau de qualité professionnelle.
\pagebreak


# **VIII. Tests des fonctionnalités et résultats**

La phase de tests a occupé une place essentielle dans le développement de TalentÉkô.

Un projet web, aussi bien conçu soit-il, ne peut être considéré comme abouti tant que chaque fonctionnalité n’a pas été vérifiée, corrigée, stabilisée et validée dans des conditions proches de l’utilisation réelle.

J’ai ainsi entrepris un travail systématique de tests fonctionnels, exploratoires et techniques afin de garantir la fiabilité, la fluidité et la cohérence globale de la plateforme.

Mon objectif n’était pas simplement de m’assurer que “cela fonctionne”, mais de comprendre comment l’utilisateur allait réellement interagir avec l’interface, quelles erreurs il pourrait rencontrer, quels comportements inattendus pourraient survenir, et comment optimiser le parcours pour qu’il soit aussi fluide que possible.

Cette démarche m’a permise de renforcer la qualité générale du projet et d’aborder les problématiques avec un regard critique et professionnel.


## **Le test du parcours d’inscription**
Le parcours d’inscription étant la porte d’entrée de TalentÉkô, il était indispensable qu’il soit fiable, intuitif et sans friction
J’ai testé ce processus dans différentes conditions : compte inexistant, compte déjà enregistré, saisie incorrecte, mots de passe non conformes aux exigences de sécurité ou encore champs laissés vides.
J’ai pu constater l’efficacité des validations côté serveur, qui guident l’utilisateur grâce à des messages d’erreur clairs et précis.
Le système de double vérification des mots de passe, combiné avec la validation dynamique, assure une expérience fluide tout en renforçant la sécurité.
J’ai également testé la gestion des doublons.
Lorsque l’utilisateur tente de créer un compte avec un email déjà utilisé, l’application le prévient immédiatement.
Ce mécanisme empêche les conflits en base de données et renforce la fiabilité du système de connexion.
Les tests ont confirmé que l’inscription était à la fois simple, intuitive et totalement fonctionnelle, permettant à n’importe quel utilisateur de rejoindre TalentÉkô en quelques minutes.

## **Le test du formulaire de connexion**
Après l’inscription, j’ai validé le bon fonctionnement de la connexion en testant différents scénarios : mauvais mot de passe, compte inexistant, compte valide, session expirée ou retour automatique sur la page précédente après authentification.
La mise en place de contraintes strictes sur les mots de passe et la gestion sécurisée des sessions garantissent un niveau de protection élevé.
J’ai également vérifié que les messages d’erreur étaient suffisamment explicites pour permettre à l’utilisateur de comprendre ce qui ne va pas sans compromettre la sécurité du système.
En parallèle, j’ai testé les redirections pour m'assurer qu’un utilisateur connecté est toujours guidé vers les sections pertinentes de l’application, comme son tableau de bord ou les pages de gestion de profil.

## **Les tests liés à la création et à la modification d’une annonce**
La création d’annonce représente l’une des fonctionnalités les plus importantes de TalentÉkô, car elle est au cœur du concept du site.
J’ai donc consacré un temps particulier à tester la robustesse, la cohérence et la simplicité de ce module.
J’ai rempli le formulaire avec différents types de données : longues, courtes, invalides, manquantes, avec ou sans images, pour vérifier que la validation réussissait à filtrer toutes les erreurs possibles.
J’ai également testé l’upload d’images afin de m’assurer que les contraintes de taille, de format et de sécurité étaient bien respectées et que les images étaient correctement traitées et redimensionnées.
Les tests ont montré que le formulaire s’adapte parfaitement aux différents cas d’utilisation et qu’il reste facile à comprendre même pour un utilisateur novice.
J’ai aussi testé la modification d’annonce, l’édition de chaque champ, la mise à jour des images et la précision des messages de validation.
Chaque action se déroule de manière fluide, ce qui confirme la fiabilité du module dans un contexte d'utilisation réel.


## **Les tests de recherche et de filtres**
Le moteur de recherche est un élément essentiel de TalentÉkô, car il permet d’accéder rapidement à la compétence recherchée.
J’ai testé ce module avec divers scénarios, en utilisant des mots-clés partiels, des recherches exactes, des catégories filtrées ou encore des recherches sans résultat.
Chaque test m’a permis de valider l’optimisation des requêtes Doctrine, qui récupèrent les informations avec précision tout en conservant de bonnes performances.
Les filtres dynamiques ont été testés pour s’assurer qu’ils fonctionnent tous ensemble, qu’ils se mettent à jour en temps réel et que les pastilles de filtres actifs s’affichent correctement.
J’ai également vérifié que la suppression d’un filtre mettait bien à jour les résultats instantanément, sans provoquer d’erreurs ou d’incohérences visuelles.
Les résultats de ces tests ont montré une recherche rapide, précise et agréable à utiliser, même lorsque plusieurs filtres sont appliqués simultanément.

## **Les tests du système de favoris**
Afin de garantir un fonctionnement optimal du système de favoris, j’ai testé l’ajout et la suppression d’annonces dans différents contextes : utilisateur connecté, utilisateur non authentifié, annonce déjà dans les favoris, ou encore suppression depuis la liste personnelle.
Les tests ont confirmé que les règles de sécurité empêchent les utilisateurs non connectés d’accéder à cette fonctionnalité, tandis que les utilisateurs authentifiés peuvent gérer leurs favoris sans difficulté.
J’ai également validé que les animations et les interactions visuelles fonctionnaient correctement.

## **Les tests de la messagerie interne**
La messagerie étant un module complexe, j’ai effectué des tests approfondis sur l’envoi, la réception et l’affichage des messages.
J’ai testé l’accès aux threads pour vérifier que seuls les participants pouvaient consulter la conversation.
J’ai également simulé plusieurs échanges afin de m'assurer que les messages s’affichent correctement, dans l’ordre chronologique, avec le bon auteur et les bonnes indications de date.
J’ai aussi vérifié que la navigation entre plusieurs fils de discussion restait fluide et que les utilisateurs pouvaient facilement retrouver leurs échanges récents.
La messagerie a passé l’ensemble des tests sans provoquer d’anomalies, ce qui confirme la robustesse de la logique métier et la sécurité de l’accès aux données.

## **Résultat global des tests**
Après avoir testé l’ensemble des fonctionnalités essentielles, j’ai pu constater que TalentÉkô fonctionnait de manière stable, fluide et cohérente.
Les tests ont permis d’éliminer les rares anomalies détectées au cours du développement et d’améliorer certains comportements pour offrir une meilleure expérience utilisateur.
Ils m’ont également permis de valider le bon fonctionnement des routes, des contrôleurs, des formulaires, des permissions et de l’interface visuelle.
Aujourd’hui, TalentÉkô se présente comme une application fiable, complète et prête à être utilisée en conditions réelles.
Cette phase de tests m’a appris l’importance de la rigueur, de la patience et de la méthode, et elle constitue une étape incontournable dans la réussite du projet.

\pagebreak


# IX — Déploiement



\pagebreak


# **X. Veille technologique**


Tout au long du développement de TalentÉkô, j’ai accordé une place essentielle à la veille technologique.
Dans un domaine comme le développement web, où les technologies évoluent vite et où de nouveaux outils apparaissent chaque semaine, la veille n’est pas un luxe : c’est une nécessité.
Elle me permet de rester à jour, de comprendre les tendances du marché et d’améliorer continuellement mes pratiques.
TalentÉkô a été un terrain d’application idéal pour mettre en pratique ce que j’ai appris lors de cette veille, mais aussi pour approfondir mes connaissances de manière autonome.
Ma veille s’est naturellement concentrée sur plusieurs axes qui concernent directement la qualité et l’évolution d’un projet web : les frameworks PHP modernes, les outils frontend, la gestion des interfaces dynamiques, la sécurité, les bonnes pratiques d’architecture et les innovations en matière d’accessibilité.
Le premier domaine que j’ai approfondi est celui des frameworks backend, et plus particulièrement **Symfony**, qui est la base technique de TalentÉkô.
Pendant ma veille, j’ai suivi l’évolution des versions, les bonnes pratiques recommandées par la documentation officielle, ainsi que les retours d’expériences de développeurs professionnels.
Cela m’a permis de comprendre l’importance d’une architecture claire, de l’utilisation des services, de la séparation des responsabilités et du respect des conventions du framework.
J’ai également étudié les améliorations apportées à Symfony 6, notamment sur les performances, la gestion des formulaires, les entités Doctrine et la sécurité.
Cette veille m’a beaucoup aidée, car elle m’a guidée dans mes choix et m’a permis d’adopter une approche conforme aux standards modernes du développement PHP.
Sur la partie frontend, ma veille s’est concentrée sur les outils émergents et largement adoptés dans l'industrie.
J’ai particulièrement étudié **TailwindCSS**, un framework que l’on voit aujourd’hui dans de nombreux projets professionnels, notamment grâce à sa flexibilité et à la rapidité qu’il apporte dans la création d’interfaces.
En observant des retours d’expérience, des tutoriels et des exemples concrets, j’ai compris pourquoi tant d’équipes adoptent Tailwind : il permet de concevoir des interfaces propres, accessibles et réactives tout en réduisant la charge liée au CSS classique.
Ce que j’ai appris durant ma veille m’a permis d'utiliser Tailwind de manière efficace dans TalentÉkô, notamment en créant des composants réutilisables, en respectant les règles d’accessibilité et en gardant un design cohérent dans tout le site.
Un autre axe majeur de ma veille a été **Stimulus** et la manière dont il s'intègre dans les projets Symfony.
À une époque où de nombreuses applications basculent vers des frameworks SPA comme React ou Vue.js, il est intéressant de voir comment Stimulus permet d’ajouter du dynamisme sans imposer toute la complexité d'un framework frontend complet.
En étudiant des exemples réels, j’ai découvert comment Stimulus apporte un juste équilibre entre simplicité et interactivité.
Cela m’a permis de réaliser des composants dynamiques — comme les modales, la validation des mots de passe ou les filtres de recherche — tout en conservant une architecture claire et des performances optimales.
La veille sur la sécurité a également occupé une part importante de mon travail.
J’ai consulté régulièrement la documentation OWASP, les recommandations de Symfony et plusieurs ressources spécialisées dans la protection des données.
Cela m’a permis d’adopter de bons réflexes pour sécuriser les formulaires, protéger les routes sensibles, gérer les sessions, filtrer les entrées utilisateur et mettre en place des vérifications plus approfondies via les Security Voters.
Cette veille m’a sensibilisée aux risques concrets auxquels une plateforme web peut être exposée, comme les injections, les attaques CSRF ou l’usurpation d'identité, et m’a donné les clés pour éviter ces pièges.
L’accessibilité est un domaine que j’ai découvert plus en profondeur grâce à ma veille.
J’ai étudié les recommandations WCAG, les bonnes pratiques UX, et des outils simples permettant de tester les contrastes ou de valider la compatibilité clavier.
C’est grâce à cette recherche que j’ai pu ajuster la palette TalentÉkô, structurer correctement les niveaux de titres, identifier les pièges fréquents dans les formulaires ou encore m’assurer que les modales pouvaient être utilisées entièrement au clavier.
Cette dimension m’a permis de proposer une plateforme plus inclusive, plus confortable et plus professionnelle.
Enfin, ma veille s’est orientée vers l’optimisation et les bonnes pratiques de performance.
J’ai étudié l’importance de la minification, de la gestion du cache, de la compression des images, et des optimisations liées à Doctrine.
Ces connaissances m’ont guidée dans le choix des outils, dans l'organisation de mes assets et dans la conception des requêtes SQL.
La veille technologique m’a donc permis de développer TalentÉkô non seulement avec les compétences acquises durant ma formation, mais avec un regard moderne, informé et orienté vers les standards actuels de l’industrie.
Elle a nourri mes décisions, a renforcé ma compréhension globale des outils et m’a aidée à produire une application plus fiable, mieux pensée et plus durable.
Elle constitue aujourd’hui un réflexe important dans ma pratique du développement : rester curieuse, continuer à apprendre, vérifier mes sources, analyser les tendances et adapter mes méthodes.

\pagebreak


# **XI. Résolution de problèmes**

Au cours du développement de TalentÉkô, j’ai été confrontée à plusieurs défis techniques qui m’ont permis de progresser, de renforcer mes compétences et d’adopter une démarche de résolution structurée.
Un projet web complet n’avance jamais en ligne droite : il est fait d’essais, d’erreurs, d’ajustements et d’apprentissages constants.
Cette partie du dossier reflète l’envers du décor, celui que les utilisateurs ne voient pas, mais qui constitue une part essentielle du métier de développeur.
Chaque difficulté rencontrée a été pour moi l’occasion de comprendre davantage la logique des outils que j’utilisais, d’améliorer mes réflexes, de me documenter, de tester, de débugger et de trouver la solution la plus propre possible.
C’est grâce à ces moments que j’ai réellement pris conscience de l’importance de la rigueur, de la patience et de l'analyse dans la construction d’une application solide.

## **La gestion des erreurs liées aux entités et à la base de données**
L’une des premières difficultés rencontrées concernait la structure de la base de données, notamment lorsque j’ai commencé à créer des relations complexes entre les entités.
Certaines erreurs Doctrine n’étaient pas toujours claires, et il m’a fallu plusieurs essais pour comprendre d’où venaient les conflits.
Par exemple, à un moment du développement, j’ai rencontré des erreurs de clé unique sur des slugs ou des liens entre entités, ce qui empêchait la base de se remplir correctement.
Pour résoudre ces problèmes, j’ai appris à analyser précisément les messages d’erreur, à retracer chaque relation dans mon UML, à vérifier les annotations de mes entités, et à tester manuellement certains cas limites.
Au fil du projet, j’ai fini par maîtriser entièrement les relations ManyToOne, OneToMany et ManyToMany, ainsi que les migrations Doctrine, ce qui m’a apporté une grande confiance dans ma capacité à gérer des bases de données.

## **Les problèmes d’encodage et de fichiers corrompus**

Un autre défi plus complexe a été la gestion de l’encodage des fichiers.
Au cours du développement, certains fichiers étaient corrompus à cause d’un BOM ou d’un encodage incorrect, ce qui provoquait des comportements étranges ou des erreurs Symfony difficiles à identifier.
Ces problèmes sont invisibles à l’œil nu mais suffisent à perturber l’application entière.
Pour résoudre cela, j’ai mis en place un système de vérification automatique dans les hooks Git : avant chaque commit, le projet analyse les fichiers pour s’assurer qu’ils sont propres et correctement encodés.
Ce fut un apprentissage important, car il m’a appris à anticiper ce type de bug subtil, à mieux comprendre la chaîne d’encodage (UTF-8 sans BOM), et à renforcer la qualité du code à la source.
Aujourd’hui, grâce à ce travail, l’ensemble du projet TalentÉkô utilise un encodage stable et propre, ce qui garantit une meilleure fiabilité et évite de nombreux problèmes futurs.

## **Les erreurs liées au routing et à la structuration des contrôleurs**
J’ai également rencontré des difficultés dans la gestion des routes, notamment lorsqu’il a fallu organiser le projet de manière modulaire.
Il m’est arrivé d’avoir des doublons de routes, des conflits entre paramètres ou des erreurs 404 inattendues.
Ces problèmes venaient parfois d’une mauvaise hiérarchie dans les contrôleurs, d’une annotation mal placée ou d’un slug mal généré.
La résolution de ces erreurs m’a appris à vérifier systématiquement mes routes via la commande `debug:router`, à renommer certaines actions pour éviter les collisions, et à structurer mes contrôleurs de façon claire et cohérente.
Au fil du temps, j’ai réussi à obtenir une architecture limpide, où chaque fonctionnalité est isolée dans son module, ce qui facilite énormément la maintenance.

## **La gestion dynamique des images et l’optimisation des uploads**
Un autre problème que j’ai dû résoudre concernait les images.
Au départ, les images uploadées étaient trop lourdes, mal recadrées ou mal stockées, ce qui ralentissait le site et créait une expérience frustrante.
Les tailles n’étaient pas homogènes, certaines images déformaient l’affichage et les traitements n’étaient pas optimisés.
Pour corriger cela, j’ai intégré LiipImagine et j’ai créé plusieurs filtres permettant de redimensionner les images selon leur usage (affichage en miniature, carte d’annonce, fiche détaillée).
J’ai également mis en place des commandes Symfony personnalisées permettant de vérifier les images existantes, de réparer les chemins incorrects ou de supprimer les images incorrectes.
Ce travail a demandé patience, tests et ajustements, mais aujourd’hui TalentÉkô dispose d’une gestion d’images propre, optimisée et performante.

## **Les petits détails qui font les grandes différences**
Au-delà des grosses erreurs techniques, j’ai été confrontée à une multitude de petits détails :
une modale qui ne se fermait pas correctement, un formulaire qui n’affichait pas les erreurs au bon endroit, un bouton qui disparaissait en responsive ou encore un filtre qui ne se mettait pas à jour immédiatement.
Ces problèmes peuvent sembler anecdotiques, mais ils sont essentiels pour offrir une expérience utilisateur vraiment agréable.
Pour chacun d’eux, j’ai appris à utiliser les outils du navigateur, à analyser le DOM, à inspecter les requêtes, à tester différents comportements et à réfléchir à la meilleure solution.
Cette répétition d’essais et d’erreurs a renforcé ma compréhension du frontend et m’a appris à être beaucoup plus attentive aux détails.


## **Ce que ces difficultés m’ont appris**
Toutes ces erreurs, corrections, recherches et expérimentations ont eu un impact profond sur ma manière de travailler.
Elles m’ont appris que le développement n’est pas une suite d’étapes linéaires, mais un processus vivant, où l’apprentissage se fait surtout dans les moments où les choses ne fonctionnent pas comme prévu.
Elles m’ont appris à être autonome, à me documenter, à garder mon calme et à trouver des solutions adaptées, même dans des situations qui semblent complexes.
Ces problèmes résolus représentent aujourd’hui l’une de mes plus grandes fiertés : ils sont la preuve que je suis capable d’analyser, de comprendre et d’améliorer un système complet, exactement comme un vrai développeur professionnel doit le faire.

\pagebreak


# **XII. Conclusion**


TalentÉkô a été bien plus qu’un simple projet de formation ; il a représenté pour moi une véritable immersion dans le métier de développeur web, avec ses exigences, ses défis, ses difficultés, mais aussi avec tout le plaisir qu’apporte la création d’une application qui prend vie, page après page, fonctionnalité après fonctionnalité.
En développant TalentÉkô, j’ai compris que coder, ce n’est pas seulement écrire des lignes de PHP ou intégrer des composants Tailwind ; c’est imaginer, structurer, concevoir, tester, corriger, optim
C’est transformer une idée en un produit concret, utile et cohérent.
Ce projet m’a permis de mesurer toute l’étendue des compétences qu’un développeur doit maîtriser pour mener à bien une application complète.
J’ai appris à analyser un besoin, à réfléchir aux usages réels, à concevoir une base de données stable, à structurer un code clair et maintenable, à développer un backend solide, à intégrer une interface moderne, à penser l’accessibilité, à sécuriser chaque route sensible, à optimiser les performances et à anticiper les évolutions futures.
TalentÉkô m’a obligée à devenir organisée, patiente, rigoureuse, à comprendre chaque choix, à justifier chaque décision.
Il m’a aussi appris à ne pas fuir les difficultés, à les affronter, à les disséquer, puis à les résoudre avec logique et persévérance.
Au-delà de l’aspect technique, ce projet m’a appris à penser “produit”.
J’ai compris l’importance de l’expérience utilisateur, l’impact d’un bouton mal placé, la valeur d’un message d’erreur clair, l’équilibre d’une interface, la cohérence d’une charte graphique.
J’ai pris conscience qu’un site n’est pas qu’une succession de pages, mais un parcours, une ambiance, une intention.
TalentÉkô est né avec cette volonté d’être accessible, chaleureux, moderne, humain.
C’est une plateforme tournée vers les autres, construite autour du partage et de la mise en valeur des compétences de chacun.
En travaillant sur ce projet, j’ai aussi mesuré à quel point j’aime ce métier.
Il y a quelque chose de profondément gratifiant dans le fait d’imaginer une fonctionnalité et de la voir fonctionner parfaitement quelques heures plus tard.
Il y a une vraie satisfaction à comprendre un bug tenace, à organiser une architecture propre, à optimiser un composant, à voir une interface prendre vie.
TalentÉkô a renforcé ma motivation à évoluer dans ce domaine, à continuer d’apprendre, à approfondir mes connaissances et à devenir une développeuse toujours plus autonome, créative et sûre de ses choix techniques.
Ce projet représente également ma capacité à aller au bout des choses.
J’ai mis en place une vraie organisation, j’ai documenté chaque étape, j’ai versionné proprement mon code, j’ai testé minutieusement chaque fonctionnalité, et j’ai préparé une procédure de déploiement complète.
TalentÉkô n’est pas un prototype inachevé : c’est une application prête à être utilisée, stable, cohérente, et évolutive.
Aujourd’hui, je suis fière du résultat.
Fière d’avoir conçu seule une plateforme complète.
Fière d’avoir traversé les difficultés sans abandonner.
Fière d’être arrivée à un niveau où je sais non seulement développer, mais aussi comprendre pourquoi je fais les choses, comment les améliorer, comment les rendre plus propres, plus sécurisées, plus professionnelles.
TalentÉkô a été pour moi l’occasion de confirmer mon envie de travailler dans le développement web, mais surtout l’occasion de prouver à moi-même que je suis capable d’imaginer un projet, de le structurer, de le construire et de le mener jusqu’au bout.
Ce dossier, ce code, cette application… tout cela représente ma progression, mes efforts, mon travail et ma détermination.
C’est avec cette même motivation que je souhaite poursuivre mon parcours professionnel.
TalentÉkô n’est que le début.
Ce que j’ai appris ici, je veux désormais le mettre au service d’équipes, de projets, d’entreprises qui cherchent une développeuse sérieuse, impliquée, passionnée et capable de s’adapter.
Je sais que j’ai encore beaucoup à apprendre, mais ce projet prouve que j’ai l’envie, l’énergie et la capacité d’y parvenir.
\pagebreak


# **XIII. Annexes**


Les annexes de ce dossier ont pour objectif d’apporter une vision plus concrète, plus visuelle et plus détaillée du travail réalisé autour de TalentÉkô.
Elles ne sont pas seulement des pièces jointes techniques : elles constituent la mémoire du projet, les traces de chaque étape importante, les documents qui témoignent de la progression, des choix réalisés, des tests effectués et de la structure mise en place.
Elles permettent au lecteur de mieux comprendre l’ampleur du travail accompli, de visualiser les interfaces, d’apprécier l’organisation technique et de constater la cohérence qui relie l’ensemble.
J’ai choisi de regrouper dans ces annexes les éléments les plus pertinents pour illustrer le développement de TalentÉkô.


**Annexe 1 — Diagramme UML complet de la base de données**

Présentation graphique des entités, relations, cardinalités et organisation globale de la structure.

**Annexe 2 — Maquettes UI/UX**

Pages d’accueil, annonces, création d’annonce, profil, messagerie, tableau de bord, formulaires.

**Annexe 3 — Extraits de code significatifs**

Contrôleurs, services métiers, formulaires Symfony, entités Doctrine, templates Twig.

**Annexe 4 — Captures d’écran du site final**

Interface desktop et mobile : home, recherche, annonce, favoris, profil, messagerie, dashboard.

**Annexe 5 — Résultats des tests**

Exemples de tests fonctionnels, scénarios validés, captures et logs pertinents.

**Annexe 6 — Architecture des dossiers du projet Symfony**

Organisation finale du projet (src, templates, config, etc.) pour montrer la structure MVC.

**Annexe 7 — Commandes personnalisées Symfony**

Documentation des commandes internes créées (images, slugs, cache, etc.).

**Annexe 8 — Procédure de déploiement**

_(rédigée demain avec les infos réelles)_
