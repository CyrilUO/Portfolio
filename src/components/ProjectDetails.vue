<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import FadeIn from "./FadeIn.vue";
import langchain from "@/assets/images/langchain-g.webp";
import gsbProject from "@/assets/images/gsb-photo-project.png";
import portfolio from "@/assets/images/portfolio.png";
import sap from "@/assets/images/sap.png";
import afip from "@/assets/images/AFIP.jpg";
import Buttons from "@/components/common/buttons.vue";

import boardSkills from "@/assets/Tableau-de-synthese-E4-BTS-SIO-2024-DUPONT-CYRIL.pdf"

const downloadSkills = () => {
  const link = document.createElement('a');
  link.href = boardSkills;
  link.download = 'Cyril_DUPONT_REFERENTIELS.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const projects = [
  {
    id: 1,
    title: 'Agentic IA',
    description: 'Implémentation de framework IA permettant de contraindre les LLM à répondre selon des structures de données définies   ',
    tech: ['FastAPI', 'Gradio', 'Langchain', 'Langraph', 'Langfuse', 'Pydantic', 'Python'],
    image: langchain,
    competence: {
      global: [`
  <div>
    <p>
      Ce projet consiste en une refonte d’application ayant pour objectif principal de <strong class="text-yellow-400">contraindre les sorties des modèles de langage (LLM)</strong> à respecter une structure précise définie en amont. Pour cela, j’ai utilisé un ensemble de technologies modernes telles que <strong class="text-blue-500">Pydantic</strong>, <strong class="text-blue-500">FastAPI</strong>, <strong class="text-blue-500">Langchain</strong>, <strong class="text-blue-500">Langfuse</strong>, et <strong class="text-blue-500">Langraph</strong> afin d'inclure un widget d'analyse de données dans un environnement sécurisé SAP.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Concepts abordés :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Utilisation de Pydantic :</strong> Définition de schémas de sortie stricts, permettant de valider et de structurer les réponses des LLM selon un format prédéfini (structured output).</li>
      <li><strong>API REST avec FastAPI :</strong> Création d’endpoints sécurisés permettant de communiquer avec l’IA en temps réel. Mise en place de mécanismes d’authentification via JWT pour garantir un accès sécurisé.</li>
      <li><strong>Langchain :</strong> Orchestration des appels aux LLM et gestion des workflows complexes par l’intermédiaire d’agents intelligents.</li>
      <li><strong>Langfuse & Langraph :</strong> Monitoring et visualisation des workflows de données pour améliorer la traçabilité et l’efficacité des opérations. Les logs générés permettent d’identifier rapidement les erreurs ou les inefficacités dans le système.</li>
      <li><strong>Environnement sécurisé SAP :</strong> Intégration de l’application dans un environnement sécurisé, en respectant les politiques de sécurité strictes de l’entreprise.</li>
      <li><strong>Collaboration :</strong> Travail en équipe pour concevoir, implémenter et tester l’application, tout en respectant les exigences de sécurité de l’environnement SAP.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Compétences du référentiel mises en œuvre :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Gérer le patrimoine informatique :</strong>
        <ul class="list-disc pl-6 text-white">
          <li><span class="underline">Recenser et identifier les ressources numériques</span> : Identification des ressources numériques (modèles de langage, API, outils de monitoring).</li>
          <li><span class="underline">Mettre en place et vérifier les niveaux d'habilitation associés à un service</span> :  Implémentation d’un système de sécurité basé sur des contextes de sécurité et JWT pour protéger les endpoints de l’API.</li>
          <li><span class="underline">Vérifier les conditions de la continuité d'un service informatique</span> : Gestion des sauvegardes des logs et des modèles utilisés (Langfuse) permettant de tracker les errors lors du processus de raisonnement du LLM.</li>
          <li><span class="underline">Gérer les sauvegardes</span> : Les sauvegardes faites ont concernés le versioning des différentes stage de l'application</li>
          <li><span class="underline">Vérifier le respect des règles d'utilisations des ressources numériques </span> : Respect des standards de sécurité imposés par l’environnement SAP et les normes ISO.</li>
        </ul>
      </li>

      <li><strong>Répondre aux incidents et aux demandes d’assistance et d’évolution :</strong>
        <ul class="list-disc pl-6 text-white">
          <li><span class="underline">Collecter, suivre et orienter des demandes</span> : Implémentation de la demande d’évolution du client pour améliorer le controle de leur widget data</li>
          <li><span class="underline">Traiter des demandes concernant les services réseau et système applicatifs</span> : Suivi des incidents techniques liés à l’intégration des différents composants (Langchain, Langfuse, Langraph). Concerne plus l'entiereté du workflow qu'un composant de l'application lui même !</li>
          <li><span class="underline">Traiter des demandes concernant les applications</span> : Analyse des erreurs par l’exploitation des logs générés par Langfuse.</li>
        </ul>
      </li>

      <li><strong>Travailler en mode projet :</strong>
        <ul class="list-disc pl-6 text-white">
          <li><span class="underline">Analyser les objectifs et les modalités d'organisation d'un projet</span> : Définition des objectifs du projet en collaboration avec l’équipe via Microsoft Loop.</li>
          <li><span class="underline">Plannifier les activités</span> : Utilisation d’outils de gestion de projet (GitHub) pour planifier les tâches et suivre les progrès.</li>
          <li><span class="underline">Evaluer les indicateurs de suivi d'un projet et analyser les écarts</span> : Réalisation de rapports réguliers sur l’avancement du projet et les tâches étaient assignés à des dates spécifiques suite au chiffrage des jours passés à travailler sur certaines fonctionnalités</li>
        </ul>
      </li>

      <li><strong>Mettre à disposition des utilisateurs un service informatique :</strong>
        <ul class="list-disc pl-6 text-white">
          <li><span class="underline">Réaliser les test d'intégration et d'acceptation d'un service</span> : Tests non réalisés par les personnes de notre équipe </li>
          <li><span class="underline">Déployer un service</span> : Déploiement de l’application dans un environnement sécurisé SAP nommé SAC (sandbox).</li>
          <li><span class="underline">Accompagner les utilisateurs dans la mise en place d'un service</span> : Accompagnement des utilisateurs dans l’utilisation de l’outil, notamment par la rédaction d'une documentation technique et utilisateur.</li>
        </ul>
      </li>

      <li><strong>Organiser son développement professionnel :</strong>
        <ul class="list-disc pl-6 text-white">
          <li><span class="underline">Mettre en place son environnement d'apprentissage personnel</span> : Veille technologique continue sur les nouvelles technologiques versions notamment de Langchain sur leur plateforme Youtube, via Linkedin avec des abonnements à des comptes dédiés afin de recenser et de parler aux collègues des nouvelles technologies du moment !</li>
          <li><span class="underline">Mettre en oeuvre des outils et stratégies de veille informationnelle </span> : Subscription à plusieurs apps d'actu "MIT NEWS" / "TechPort" et newsletter "TLDR"</li>
          <li><span class="underline">Gérer son identitié profesionnelle</span> : On m'a demandé d'ajouter à mon CV d'entreprise une compétence portant autour du développement LLM portant sur des cas d'usage précis</li>
          <li><span class="underline">Développer son projet profesionnelle</span> : Cette expérience de développement LLM a clairement conditionné la suite des projets sur lesquels je souhaite participer et où seront consacrés mes efforts. Je souhaite devenir une figure référente dans le domaine agentic / IA d'ici à 2 ans</li>
        </ul>
      </li>
    </ul>
    <p class="text-white">
      Ce projet a une fois encore permis de mettre en oeuvre un ensemble de compétences listées dans le référentiel tout en intégrant des pratiques modernes de développement au sein d'un environnement sécurisé.
      L’utilisation de technologies avancées comme Langchain et FastAPI a permis de structurer efficacement les sorties des LLM pour un usage dans le domaine de la data. Il est surement le projet dont je suis le plus fier d'avoir participé ! 😎
    </p>
  </div>
`]
    }
  },
  {
    id: 2,
    title: 'GSB ecommerce',
    description: 'Réplicat d\'une solution ecommerce dans le cadre du projet de fin d\'étude répondant à un besoin d\'une entreprise fictive',
    tech: ['Vue.JS3', 'Spring JDBC-Security-Web', 'Java', 'Javascript', 'MySQL', 'Docker', 'Axios'],
    image: gsbProject,
    competence: {
      global: [`
  <div>
    <h2 class="text-xl text-yellow-400 font-bold mb-1 text-center">Application Web – Projet GSB (Java Spring & Vue.js)</h2>

    <p>
      Cette application web a été conçue pour répondre aux besoins de gestion d'une organisation fictive dans le domaine de l’e-commerce pharmaceutique. Elle repose sur une architecture client-serveur robuste : un backend en <strong class="text-blue-500">Java Spring</strong> et un frontend moderne en <strong class="text-green-500">Vue.js</strong>. Ce projet m’a permis d’aborder un grand nombre de concepts techniques tout en mettant en œuvre les compétences du référentiel BTS SIO, notamment les blocs 1, 4, 5 et 6.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Bloc 1 – Gérer le patrimoine informatique</h3>
    <ul class="list-disc pl-6 text-white">
      <li><span class="underline">Recenser et identifier les ressources numériques</span> : Mise en place d’un système de gestion des utilisateurs, rôles et permissions à travers des entités et des tables SQL clairement structurées via une MCD créée en amont.</li>
      <li><span class="underline">Mettre en place et vérifier les niveaux d’habilitation associés à un service</span> : Configuration fine des endpoints sécurisés avec <strong>Spring Security</strong> et JWT, permettant un contrôle d'accès par rôle.</li>
      <li><span class="underline">Vérifier les conditions de continuité d’un service informatique</span> : Réflexion autour de la saturation des API (concept de load balancer entrevu).</li>
      <li><span class="underline">Gérer les sauvegardes</span> : Versionnage des stages de l'application via Git.</li>
      <li><span class="underline">Vérifier le respect des règles d'utilisation des ressources numériques</span> : Implémentation de CGU fictives</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Bloc 4 – Travailler en mode projet</h3>
    <ul class="list-disc pl-6 text-white">
      <li><span class="underline">Analyser les objectifs et les modalités d’organisation d’un projet</span> : Définition des fonctionnalités principales (authentification, panier, gestion produits, commentaires) selon un cahier des charges fourni.</li>
      <li><span class="underline">Planifier les activités</span> : Répartition des tâches via <strong>Asana</strong>, organisation en sprints hebdomadaires pour respecter un calendrier réaliste.</li>
      <li><span class="underline">Évaluer les indicateurs de suivi d’un projet et analyser les écarts</span> : Suivi des avancements via commits Git et revues de code. J’ai pu évaluer ce que je faisais bien et les zones où je perdais du temps.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Bloc 5 – Mettre à disposition des utilisateurs un service informatique</h3>
    <ul class="list-disc pl-6 text-white">
      <li><span class="underline">Réaliser les tests d’intégration et d’acceptation d’un service</span> : Tests manuels sur Postman côté API, scénarios de test sur les composants Vue pour valider les interactions utilisateur.</li>
      <li><span class="underline">Déployer un service</span> : Déploiement en local via <strong>Docker Compose</strong> était initialement prévu mais l'outils étant relativement complexe, l'idée a été abandonnée</li>
      <li><span class="underline">Accompagner les utilisateurs dans la mise en place d’un service</span> : Rédaction d’un guide utilisateur pour expliquer les rôles, la navigation, et les cas d’usage principaux.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Bloc 6 – Organiser son développement professionnel</h3>
    <ul class="list-disc pl-6 text-white">
      <li><span class="underline">Mettre en place son environnement d’apprentissage personnel</span> : J’ai utilisé ce projet comme support pour apprendre Spring Security, la gestion JWT, la structure MVC, les API, les concepts d'architecture, les librairies de style...</li>
      <li><span class="underline">Mettre en œuvre des outils et stratégies de veille informationnelle</span> : Lecture de documentation officielle et veille/apprentissage sur les bonnes pratiques de structure d’API REST via newsletter</li>
      <li><span class="underline">Gérer son identité professionnelle</span> : Ce projet est documenté dans mon portfolio. Il représente une brique importante de mon identité tech, montrant que je sais développer une vraie app fullstack sécurisée.</li>
      <li><span class="underline">Développer son projet professionnel</span> : Ce projet m'a permis d'aller plus loin que la simple volonté de me spécialiser dans le front. Il a embelli ce que j'appréciais déjà et m'a permis de découvrir des choses pour lesquelles j'ignorais mon appétence : bonjour le backend</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Technologies utilisées</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Backend :</strong> Java Spring (Spring Boot, Spring Security, Spring Data JDBC)</li>
      <li><strong>Frontend :</strong> Vue.js 3, Pinia, Axios</li>
      <li><strong>Base de données :</strong> MySQL</li>
      <li><strong>Outils :</strong> Asana, GitHub, Docker, Postman</li>
    </ul>
    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Conclusion : </h3><p class="mt-4 text-white">Ce projet représente un réel step-up en terme de bagage de compétences. J'ai pu entrevoir le spectre entier d'une application, de sa conception via Figma ou du Wireframing, en passant par son intégration front ainsi que la conception côté serveur et base de données sans oublier la conception et l'essence même du web : la communication via des protocoles et les API. C'est un véritable apport qui m'a permis d'appréhender les projets d'entreprise avec beaucoup plus de serennité ! </p>
  </div>
`],

    },
    seeMore: {
      githubFront: 'https://github.com/CyrilUO/GSB-ECOMMERCE-FRONT',
      githubBack: 'https://github.com/CyrilUO/GSB-ECOMMERCE-BACKEND'
    },
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Portfolio réalisé en cours de deuxième année de formation.',
    tech: ['Vue', 'Tailwind CSS'],
    image: portfolio,
    competence: {
      global: [`
  <div>
    <h2 class="text-xl text-yellow-400 text-center font-bold mb-4">Portfolio Personnel - Organisation du Développement Professionnel</h2>
    <p>
      Ce portfolio a été pensé comme un projet personnel structurant, avec l’objectif de mettre en lumière mon parcours éducatif, mes compétences techniques, et les projets qui ont jalonné ma formation. Il m’a aussi permis de prendre du recul sur mon évolution, de clarifier mon projet professionnel, et de poser les bases de ma présence en ligne en tant que futur développeur. Développé en <strong class="text-green-500">Vue.js</strong> et hébergé sur <strong class="text-blue-500">GitHub Pages</strong>, il m’a servi à la fois d’outil d’apprentissage et de vitrine professionnelle.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Bloc 6 – Organiser son développement professionnel</h3>
    <ul class="list-disc pl-6 text-white">
      <li><span class="underline">Mettre en place son environnement d’apprentissage personnel</span> : J’ai choisi de construire ce portfolio en utilisant des technologies que j’avais envie de maîtriser, comme <strong class="text-green-500">Vue.js</strong> et <strong>Tailwind CSS</strong>. Cela m’a permis de progresser concrètement dans la création d’interfaces modernes et responsives, tout en gagnant en autonomie sur la partie intégration.
      </li>

      <li class="mt-2"><span class="underline">Mettre en œuvre des outils et stratégies de veille informationnelle</span> : En parallèle du développement, j’ai mis en place une veille régulière via la documentation officielle des frameworks, des newsletters spécialisées, et des discussions sur GitHub ou Reddit. J’ai aussi suivi l’évolution de Vue.js et de ses écosystèmes pour rester à jour.
      </li>

      <li class="mt-2"><span class="underline">Gérer son identité professionnelle</span> : Le portfolio centralise l’ensemble de mes compétences et expériences de façon claire. J’y ai intégré un CV téléchargeable, une section "À propos de moi", et surtout un espace projets où je décris concrètement ce que j’ai réalisé (techno utilisées, rôle joué, compétences mobilisées). C’est un outil que je peux maintenant envoyer lors de candidatures ou montrer en entretien.
      </li>

      <li class="mt-2"><span class="underline">Développer son projet professionnel</span> : Le simple fait de créer ce site m’a permis de mieux cerner mes aspirations. J’ai pris conscience de mes points forts, des domaines que j’aime explorer, et du type de développeur que je veux devenir. La section "veille technologique" que j’ai ajoutée reflète aussi mon intérêt croissant pour les frameworks frontend, qui m'ont donné envie de m'investir encore plus dans ce domaine.
      </li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Objectifs du projet</h3>
    <ul class="list-disc pl-6 text-white">
      <li>Créer une plateforme responsive et accessible pour présenter mes compétences et projets.</li>
      <li>Utiliser des technologies modernes du web pour construire une interface élégante et professionnelle.</li>
      <li>Permettre une évolutivité du contenu en rendant chaque section modifiable et réutilisable.</li>
      <li>Valoriser mon profil auprès des recruteurs et de mon réseau professionnel.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Structure du portfolio</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Accueil :</strong> Introduction et objectifs professionnels.</li>
      <li><strong>À propos de moi :</strong> Infos personnelles, CV en téléchargement, contact.</li>
      <li><strong>Parcours éducatif :</strong> Diplômes, formations, et certifications obtenus.</li>
      <li><strong>Compétences :</strong> Classement par catégorie des savoir-faire acquis en formation.</li>
      <li><strong>Projets :</strong> Présentation détaillée de projets réalisés, avec explication des apports.</li>
      <li><strong>Veille technologique :</strong> Un article écrit sur les frameworks frontend du moment</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Technologies utilisées</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Frontend :</strong> Vue.js, Tailwind CSS</li>
      <li><strong>Déploiement :</strong> GitHub Pages</li>
      <li><strong>Versionnage :</strong> Git, GitHub</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Conclusion :</h3><p class="mt-4 text-white">
      Bien que ce projet soit simple dans sa forme, il a eu un grand impact pour moi. Il m’a permis de synthétiser deux années de formation, de prendre du recul, et de poser les premières pierres de mon image professionnelle. Il symbolise mon envie de progresser chaque jour et de participer, demain, à des projets concrets et stimulant ! ;)
    </p>
  </div>
`],


    }
  },
  {
    id: 4,
    title: 'Sap commerce ADVEO',
    description: 'Ajout de fonctionnalités en accord avec des spec techniques',
    tech: ['Sap Commerce', 'Flexible Search', 'Javascript', 'Java'],
    image: sap,
    competence: {
      global: [`
  <div>
    <h2 class="text-xl text-yellow-400 font-bold text-center mb-4">Projet Adveo - Participation à un Projet d'Envergure</h2>

    <p>
      Ce projet représente ma première véritable immersion dans un projet d'envergure, au sein de mon entreprise d’alternance <strong class="text-blue-500">Delaware</strong>. J’ai eu la chance d’intégrer une équipe travaillant sur la maintenance et l’évolution d’une plateforme e-commerce développée sous <strong class="text-green-500">SAP Commerce (Hybris)</strong>.
    </p>
    <p class="mt-2">
      C’était une expérience intense et enrichissante où j’ai pu découvrir concrètement le quotidien d’un projet agile en entreprise, tout en montant rapidement en compétence sur des technologies et des process exigeants.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Bloc 2 – Répondre aux incidents et aux demandes d’assistance et d’évolution</h3>
    <ul class="list-disc pl-6 text-white">
      <li><span class="underline">Collecter, suivre et orienter des demandes</span> : J’ai pu identifier des dysfonctionnements rencontrés par les utilisateurs sur la plateforme e-commerce (ex. boutons non fonctionnels, problèmes d’affichage, erreurs dans les parcours de commande). Ces remontées étaient centralisées, suivies et analysées au sein de notre backlog.</li>

      <li><span class="underline">Traiter des demandes concernant les services réseau et système applicatifs</span> : J’ai exploré et modifié des configurations internes via la console HAC et le système FlexibleSearch d'Hybris pour analyser et améliorer les performances de certaines requêtes métiers sur des bases volumineuses.</li>

      <li><span class="underline">Traiter des demandes concernant les applications</span> : J’ai développé de petits correctifs en <strong class="text-yellow-400">JavaScript</strong> pour le frontend (comportements de composants, affichage dynamique), ce qui m’a permis d’avoir un réel impact visible sur l’UX du site. </li>

      <li><span class="underline">Participer à des demandes d'évolution</span> : J’ai aussi été impliqué dans la mise en place de nouvelles fonctionnalités, avec les devs front, back, les PO et UX designers, afin de faire évoluer le site selon les attentes du client.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Bloc 4 – Travailler en mode projet</h3>
    <ul class="list-disc pl-6 text-white">
      <li><span class="underline">Analyser les objectifs et les modalités d’organisation d’un projet</span> : En début de sprint, nous analysions collectivement les tickets issus du backlog. J’ai pu comprendre le lien entre les besoins fonctionnels du client (ex. amélioration du tunnel de commande) et les tâches techniques à prévoir dans le sprint.</li>

      <li><span class="underline">Planifier les activités</span> : Chaque semaine, nous avions une réunion de planification où les tâches étaient estimées, priorisées et réparties selon les ressources. J’ai participé activement à ces réunions, ce qui m’a aidé à mieux comprendre la logique de découpage, de charge et de priorisation des stories.</li>

      <li><span class="underline">Évaluer les indicateurs de suivi et analyser les écarts</span> : Je suivais l’évolution de mes tickets dans <strong>Azure</strong>. Même si je ne gérais pas directement les KPI, j’observais régulièrement les écarts entre ce qui était prévu et ce qui était réellement réalisé. Ce suivi m’a sensibilisé aux imprévus et à l’importance de la communication continue dans l’équipe.</li>

      <li><span class="underline">Collaborer au sein d’une équipe</span> : Nous faisions un point chaque lundi pour voir où chacun en était. Ce cadre bienveillant m’a permis de poser des questions, de partager mes avancées ou mes blocages, et de progresser beaucoup plus vite que seul.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Technologies utilisées :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Backend :</strong> SAP Commerce (Hybris), Java</li>
      <li><strong>Frontend :</strong> JavaScript, JSP</li>
      <li><strong>Base de données :</strong> FlexibleSearch / SQL sur de grands volumes</li>
      <li><strong>Gestion de projet :</strong> Méthode Agile (Scrum) – Outils : Azure DevOps</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Points marquants du projet :</h3>
    <ul class="list-disc pl-6 text-white">
      <li>J’ai découvert en profondeur <strong>SAP Commerce (Hybris)</strong> et ses particularités, notamment la gestion des données produit et des règles métiers complexes.</li>
      <li>J’ai écrit mes premières lignes de code <strong>JavaScript</strong> en production, ce qui m’a permis de comprendre la rigueur nécessaire quand on code pour des utilisateurs réels.</li>
      <li>J’ai manipulé des bases de données massives et appris à lire et ajuster des requêtes complexes.</li>
      <li>Enfin, j’ai compris la logique des <strong>sprints</strong>, des livrables à date, et des attentes fortes que cela implique dans un projet IT.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Conclusion :</h3>
    <p class="mt-4 text-white">
      Ce projet a vraiment été un tournant : il m’a permis de comprendre ce que signifie travailler sur un projet professionnel réel, dans un environnement structuré, avec une vraie équipe et de vraies responsabilités. C’est là que j’ai pris conscience de l’importance de la rigueur, de l’organisation… et aussi du plaisir de voir ses contributions intégrées et utilisées en production.
    </p>
  </div>
`]

    }
  },

  {
    id: 5,
    title: 'Analyse SEO',
    description: 'Compréhension des enjeux du référencement en ligne pour améliorer la visibilité des organisations',
    tech: ['Wappalyzer', 'gtmetrix', 'SEO', 'SEA', 'SMO', 'Wireshark'],
    image: afip,
    competence: {
      global: [`
  <div>
    <p>
      Lors de notre parcours à l'<span class="font-bold text-yellow-500">AFIP Formations</span>, nous avons suivi un module de développement web centré sur l’impact du référencement (SEO) et son implémentation dans un site web. Ce module nous a permis de mettre en œuvre de concrètes stratégoes visant à améliorer la visibilité en ligne de l’organisation, en répondant aux exigences des moteurs de recherche comme <span class="text-blue-400 font-bold">Google</span>.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Compétences du référentiel mises en œuvre :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Bloc 3 : Développer la présence en ligne de l'organisation</strong>
        <ul class="list-disc pl-6 mt-2 text-white">
          <li><span class="underline space-mono-regular-italic">Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</span> :
            <p>
              Nous avons pu comprendre cmment une <strong class="text-yellow-400">charte graphique cohérente</strong> permet de garantir une identité visuelle forte et professionnelle pour une entreprise ou un particulier. Cette charte graphique uniformise les process au sein d'une entreprise notamment au travers d'éléments tels que palette de couleurs, typographie, et structure responsive pour assurer une navigation fluide sur tous les appareils. Cette identité contribue à la crédibilité de l'organisation et à l’optimisation de l’expérience utilisateur (UX), facteur déterminant pour le référencement selon les algorithmes de <span class="text-blue-400 font-bold">Google</span>.
            </p>
          </li>

          <li><span class="underline space-mono-regular-italic">Référencer les services en ligne de l'organisation et mesurer leur visibilité</span> :
            <p>
              Nous avons appris à mettre en œuvre une stratégie de référencement naturel (SEO) et à en mesurer l’efficacité grâce à des outils comme <strong class="text-blue-500">GTmetrix</strong> et <strong class="text-purple-500">Wappalyzer</strong> :
            </p>
            <ul class="list-disc pl-5 mt-2">
              <li><strong class="text-blue-500">GTmetrix</strong> : analyse des performances techniques (chargement, optimisation des images, mise en cache, minification).</li>
              <li><strong class="text-purple-500">Wappalyzer</strong> : identification des technologies (CMS, plugins SEO, frameworks) pour valider la conformité technique.</li>
            </ul>
            <p>
              Nous avons également travaillé avec <strong class="text-yellow-400">Yoast SEO</strong>, un plugin WordPress essentiel pour optimiser les balises HTML, les méta-descriptions, la structure des URL, et le contenu selon les critères SEO.
            </p>
          </li>

          <li><span class="underline space-mono-regular-italic">Participer à l'évolution d'un site web exploitant les données de l'organisation</span> :
            <p>
              En analysant les données issues des outils comme GTmetrix, nous avons identifié les zones à améliorer (ex. lenteur, taille d’image). L’évolution du site a été guidée par des données mesurables, permettant d’implémenter des optimisations ciblées.
            </p>
            <p>
              Nous avons ainsi pu tester différentes approches de structure de page, mesurer l’impact sur le référencement, et ajuster la stratégie en continu pour une amélioration progressive de la visibilité en ligne.
            </p>
          </li>
        </ul>
      </li>
    </ul> <h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Critères pris en compte par Google :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong class="text-yellow-400">La pertinence des mots-clés</strong> : Choix et positionnement stratégique dans les titres, paragraphes et URL.</li>
      <li><strong class="text-yellow-400">La qualité des backlinks</strong> : Liens entrants issus de sources fiables.</li>
      <li><strong class="text-yellow-400">L’expérience utilisateur (UX)</strong> : Optimisation du temps de chargement, design responsive, hiérarchisation claire des contenus.</li>
      <li><strong class="text-yellow-400">Le contenu frais et mis à jour régulièrement</strong> : Favorisé dans le classement des résultats de recherche.</li>
    </ul>
<h3 class="text-lg text-yellow-400 font-bold mt-6 mb-2">Conclusion : </h3><p class="text-white">
      Grâce à ce module et à la mise en pratique via des outils concrets, nous avons pu développer un site web respectant les bonnes pratiques SEO, tout en assurant une présence en ligne professionnelle, durable et mesurable.
    </p>
  </div>
`],


    }
  },
]

const route = useRoute();
const projectId = computed(() => {
  const id = route.params.id;
  return parseInt(Array.isArray(id) ? id[0] : id, 10);
});


const project = computed(() => projects.find((p) => p.id === projectId.value));
</script>

<template>
  <FadeIn>
    <div class="max-w-5xl mx-auto p-8 bg-white text-black min-h-screen mt-20">
      <router-link to="/" class="text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-1.5 bg-gray-900 text-yellow-400 font-mono font-bold
                    rounded-sm border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900
                    transition duration-300 shadow-[4px_4px_0_theme(colors.yellow.400)]
                    hover:shadow-none hover:translate-x-1 hover:translate-y-1">⬅ Retour
      </router-link>
      <div v-if="project" class="mt-6 bg-black p-6 rounded-lg shadow-lg text-white">
        <h1 class="text-3xl text-white text-center mb-6 font-bold">{{ project.title }}</h1>
        <img :src="project.image" class="w-fit mx-auto h-64 object-fit my-4 rounded"/>
        <p class="text-white space-mono-regular-italic text-center">{{ project.description }}</p>


        <div class="mt-10">
          <div v-if="project.competence">
            <div v-if="project.competence.global.length">
              <div class="bg-gray-800 px-6 rounded mb-2 text-sm leading-relaxed whitespace-pre-line"
                   v-html="project.competence.global[0]">
              </div>
            </div>
          </div>
        </div>


        <div class="flex justify-center gap-10 mt-10" v-if="project.seeMore">
          <a class="text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-1.5 bg-gray-900 text-yellow-400 font-mono font-bold
  rounded-sm border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900
  transition duration-300 shadow-[4px_4px_0_theme(colors.yellow.400)]
  hover:shadow-none hover:translate-x-1 hover:translate-y-1"
             :href="project.seeMore.githubFront">Jeter un oeil au git côté front</a>
          <a class="text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-1.5 bg-gray-900 text-yellow-400 font-mono font-bold
  rounded-sm border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900
  transition duration-300 shadow-[4px_4px_0_theme(colors.yellow.400)]
  hover:shadow-none hover:translate-x-1 hover:translate-y-1"
             :href="project.seeMore.githubBack">Jeter un oeil au git côté back</a>
        </div>

        <div class="flex justify-center mt-8">
          <Buttons label="Télécharger le référentiel" v-on:click="downloadSkills"></Buttons>
        </div>
      </div>

      <div v-else class="text-center text-red-500">Projet introuvable 😢</div>
    </div>
  </FadeIn>
</template>
