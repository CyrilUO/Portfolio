<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import FadeIn from "./FadeIn.vue";
import langchain from "@/assets/images/Langchain.png";
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
          <li>Identification des ressources numériques (modèles de langage, API, outils de monitoring).</li>
          <li>Implémentation d’un système de sécurité basé sur des contextes de sécurité et JWT pour protéger les endpoints de l’API.</li>
          <li>Gestion des sauvegardes des logs et des modèles utilisés (Langfuse) permettant de tracker les errors lors du processus de raisonnement du LLM.</li>
          <li>Respect des standards de sécurité imposés par l’environnement SAP.</li>
        </ul>
      </li>

      <li><strong>Répondre aux incidents et aux demandes d’assistance et d’évolution :</strong>
        <ul class="list-disc pl-6 text-white">
          <li>Implémentation de la demande d’évolution du client pour améliorer le controle de leur widget data</li>
          <li>Suivi des incidents techniques liés à l’intégration des différents composants (Langchain, Langfuse, Langraph).</li>
          <li>Analyse des erreurs par l’exploitation des logs générés par Langfuse.</li>
          <li>Mise en place d’un système de monitoring permettant une réponse rapide aux incidents.</li>
        </ul>
      </li>

      <li><strong>Travailler en mode projet :</strong>
        <ul class="list-disc pl-6 text-white">
          <li>Définition des objectifs du projet en collaboration avec l’équipe via Microsoft Loop.</li>
          <li>Utilisation d’outils de gestion de projet (GitHub) pour planifier les tâches et suivre les progrès.</li>
          <li>Réalisation de rapports réguliers sur l’avancement du projet.</li>
        </ul>
      </li>

      <li><strong>Mettre à disposition des utilisateurs un service informatique :</strong>
        <ul class="list-disc pl-6 text-white">
          <li>Déploiement de l’application dans un environnement sécurisé SAP.</li>
          <li>Accompagnement des utilisateurs dans l’utilisation de l’outil, notamment par la documentation et la formation.</li>
          <li>Réalisation de tests d’intégration et d’acceptation pour valider les fonctionnalités déployées.</li>
        </ul>
      </li>

      <li><strong>Organiser son développement professionnel :</strong>
        <ul class="list-disc pl-6 text-white">
          <li>Veille technologique continue sur les nouvelles versions notamment de Langchain sur leur plateforme Youtube, recensant de nouvelles manière d'implémenter leur solution chaque jour!</li>
          <li>Mise en place d’un environnement d’apprentissage personnel pour tester les nouvelles fonctionnalités des LLM depuis des projets de test locaux</li>
            <li>Echange avec des développeurs ayant travaillé sur des projets Langchain complexes.</li>
        </ul>
      </li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Technologies utilisées :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Backend :</strong> FastAPI, Pydantic, Langchain, Langfuse, Langraph</li>
      <li><strong>Environnement :</strong> SAP sécurisé</li>
      <li><strong>Outils de monitoring :</strong> Langfuse</li>
      <li><strong>Outils de visualisation :</strong> Langraph / Mermaid</li>
    </ul>

    <p class=" text-white">
      Ce projet a une fois encore permis de mettre en oeuvre un ensemble de compétences listées dans le référentiel tout en intégrant des pratiques modernes de développement au sein d'un environnement sécurisé.
      L’utilisation de technologies avancées comme Langchain et FastAPI a permis de structurer efficacement les sorties des LLM pour un usage dans le domaine de la data. Il est surement le projet dont je suis le plus fier d'avoir participé ! 😎
    </p>
  </div>
`],
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
    <h2 class="text-xl text-yellow-400 font-bold mb-1 text-center">Application Web développée avec Java Spring & Vue.js</h2>
    <p>
      Cette application web a été développée dans le but de fournir une solution complète permettant de gérer un ensemble d'opérations courantes au sein d'une organisation fictive. L'application est structurée selon une architecture client-serveur, où le backend est implémenté en <strong class="text-blue-500">Java Spring</strong> et le frontend en <strong class="text-green-500">Vue.js</strong>.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-4">Concepts abordés :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>API RESTful :</strong> Création d’API REST avec Spring Boot, permettant une communication sécurisée entre le frontend Vue.js et le backend. Implémentation de routes HTTP telles que GET, POST, PUT, DELETE pour la gestion des ressources.</li>
      <li><strong>Spring Security :</strong> Mise en place d'un système de sécurité basé sur <strong class="text-blue-500">Spring Security</strong> avec des mécanismes d’authentification et d’autorisation (JWT) pour sécuriser les endpoints de l’API.</li>
      <li><strong>Gestion de l'état côté frontend :</strong> Utilisation de <strong class="text-green-500">Pinia</strong> (équivalent moderne de Vuex) pour la gestion d’état centralisée et fluide entre les composants Vue.js.</li>
      <li><strong>Base de données relationnelle :</strong> Conception de schémas relationnels en <strong>MySQL</strong>, intégration avec <strong class="text-blue-500">Spring JDBC</strong>, et création de requêtes SQL personnalisées pour des opérations plus ou moins complexes</li>
      <li><strong>Modularisation du code :</strong> Architecture MVC au backend et découpage avec quelques composantés réutilisables côté frontend avec Vue.js 3.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4">Compétences du référentiel mises en œuvre :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Gérer le patrimoine informatique :</strong> Mise en place de systèmes de gestion des utilisateurs, des rôles et des droits d’accès en utilisant Spring Security avec JWT.</li>

      <li><strong>Répondre aux incidents et aux demandes d'assistance et d'évolution :</strong> Création d’une interface utilisateur dynamique permettant de soumettre des incidents ou demandes d’évolution, enregistrés en base de données avec suivi en temps réel via WebSockets.</li>

      <li><strong>Travailler en mode projet :</strong> Respect des méthodologies agiles avec gestion des tâches via <strong>Asana</strong>. Collaboration en équipe avec pull requests, revues de code, et intégration continue automatisée.</li>

      <li><strong>Mettre à disposition des utilisateurs un service informatique :</strong> Rédaction de spec technique afin de guider le développeur et l'utilisateur pour faire marcher l'application</li>

      <li><strong>Organiser son développement professionnel :</strong> Veille technologique régulière pour intégrer des bonnes pratiques modernes dans le développement web (ex : utilisation de JWT pour la sécurité, mise en place d’intercepteurs Axios pour la gestion des tokens côté frontend).</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4">Technologies utilisées :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Backend :</strong> Java Spring (Spring Boot, Spring Security, Spring Data JDBC)</li>
      <li><strong>Frontend :</strong> Vue.js 3, Pinia, Axios</li>
      <li><strong>Base de données :</strong> MySQL</li>
      <li><strong>Outils de gestion de projet :</strong> GitHub, Asana</li>
    </ul>
    <p class="text-white">
      Cette application a permis de couvrir un large éventail de concepts techniques, tout en mettant en œuvre des compétences essentielles du référentiel de formation. En alliant une architecture sécurisée à un frontend performant, ce projet représente une synthèse pratique de mes compétences en développement d’applications web.
    </p>
  </div>
`],
    },
    seeMore: {
      githubFront: 'https://github',
      githubBack: 'https://github'
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
      Ce portfolio a été conçu dans le but de centraliser et de présenter l'ensemble de mon parcours éducatif, mes compétences techniques et professionnelles acquises durant mes deux années d'études, ainsi que les projets auxquels j'ai participé. Ce projet, développé en <strong class="text-green-500">Vue.js</strong> et hébergé sur <strong class="text-blue-500">GitHub Pages</strong>, permet de structurer efficacement ma présence en ligne en tant que futur professionnel du développement informatique.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Objectifs du Projet :</h3>
    <ul class="list-disc pl-6 text-white">
      <li>Créer une plateforme dynamique, responsive et accessible permettant de mettre en avant mes compétences et mon parcours.</li>
      <li>Utiliser les technologies modernes du web pour construire une interface ergonomique et attrayante.</li>
      <li>Mettre en place une structure modulaire permettant d'ajouter ou de modifier facilement des sections (parcours, compétences, projets, etc.).</li>
      <li>Valoriser mon identité professionnelle en ligne grâce à une présentation soignée et cohérente.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Compétences mises en œuvre :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Mettre en place un environnement d'apprentissage personnel :</strong>
        Création du portfolio sur une base solide de connaissances acquises en <strong class="text-green-500">Vue.js</strong>, avec intégration de bibliothèques modernes telles que <strong>Tailwind CSS</strong> pour le style.</li>
      <li><strong>Mettre en œuvre des outils et stratégies de veille informationnelle :</strong>
        Utilisation de GitHub pour le versionnement et la publication continue du site grâce à <strong class="text-blue-500">GitHub Pages</strong>. Suivi des évolutions technologiques en consultant la documentation officielle et des forums spécialisés.</li>
      <li><strong>Gérer son identité professionnelle :</strong>
        Présentation claire et cohérente de mes compétences, projets réalisés, parcours éducatif et expériences diverses. Intégration de mon CV téléchargeable et mise en avant de mes principaux projets académiques.</li>
      <li><strong>Développer son projet professionnel :</strong>
        Structuration de mon portfolio de manière à refléter mes compétences techniques, ma progression au cours des deux années de formation, et mes projets concrets. Ce portfolio sert également de support pour les candidatures professionnelles et les entretiens.</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Structure du Portfolio :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Page d'accueil :</strong> Introduction brève, présentation de mon profil et de mon objectif professionnel.</li>
      <li><strong>Section "Compétences" :</strong> Recensement de toutes les compétences acquises durant mes études, organisées par catégories (Développement web, Backend, Gestion de projet, etc.).</li>
      <li><strong>Section "Projets" :</strong> Liste détaillée des projets auxquels j'ai participé avec une description complète, les technologies utilisées et des liens vers le code source ou les démonstrations si disponibles.</li>
      <li><strong>Section "Parcours éducatif" :</strong> Présentation de mon cursus scolaire, des diplômes obtenus, et des formations spécifiques suivies.</li>
      <li><strong>Section "À propos de moi" :</strong> Présentation personnelle, CV téléchargeable, et possibilité de me contacter.</li>
      <li><strong>Section "Veille Technologique" :</strong>Présentation d'un petit article lié à mon atrait pour les frameworks frontend qui m'ont permis de me lancer de manière plus professionnelle dans le développeur web</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Technologies utilisées :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Frontend :</strong> Vue.js, Tailwind CSS</li>
      <li><strong>Déploiement :</strong> GitHub Pages</li>
      <li><strong>Versionnage de code :</strong> Git, GitHub</li>
    </ul>

    <p class="text-white">
      Bien que simple d'un point de vue visuel, ce projet de portfolio est représente une grande satisfaction et un premier pas afin d'arriver à une insertion profesionnelle perenne. Il est le fruit de ma volonté d'apprendre de nouvelles choses jour après jour afin de participer à des projets de plus en plus stimulants.
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
      Ce projet représente ma première participation à un projet d'envergure au sein de mon entreprise dans laquelle je suis en alternances <strong class="text-blue-500">Delaware</strong>. <br> J'ai été intégré dans une équipe travaillant sur le développement et la maintenance d'une solution e-commerce basée sur <strong class="text-green-500">SAP Commerce (Hybris)</strong>.
      Ce projet m'a permis d’acquérir une expérience significative dans l’exploitation de technologies modernes, la manipulation de bases de données volumineuses, et la collaboration en équipe selon des méthodologies agiles.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Compétences mises en œuvre :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Répondre aux incidents et aux demandes d’assistance et d’évolution :</strong></li>
      <ul class="list-disc pl-6 text-white">
        <li><strong>J'ai pu collecter et suivre demandes :</strong> Identification des problèmes rencontrés par les utilisateurs du système e-commerce (ex : anomalies dans les processus de commande, erreurs d’affichage des produits, de boutons etc ... )</li>
        <li><strong>J'ai pu traiter des demandes concernant les services de système de base de données:</strong> Intervention sur des configurations spécifiques dans l’environnement <strong class="text-green-500">SAP Commerce (Hybris)</strong>, en particulier dans la consultation de produits via Flexible Search et console HAC.</li>
        <li><strong>Traiter des demandes concernant les applications :</strong> Implémentation de correctifs mineurs en <strong class="text-yellow-400">JavaScript</strong> pour améliorer l’interface utilisateur et corriger des comportements inattendus dans le frontend.</li>
        <li><strong>J'ai également pu participer aux demandes d’évolution :</strong> Contribution à l’ajout de nouvelles fonctionnalités en collaboration avec les dev front, back, UX designer, tout en assurant la compatibilité avec les standards de l’entreprise et la demande client.</li>
      </ul>

      <li class="mt-4"><strong>Travailler en mode projet :</strong></li>
      <ul class="list-disc pl-6 text-white">
        <li><strong>Analyser les objectifs et les modalités d’organisation d’un projet :</strong> Compréhension des besoins spécifiques de <strong class="text-blue-500">Adveo</strong> en matière de gestion e-commerce, et analyse des différentes phases de développement nécessaires pour atteindre les objectifs fixés.</li>
        <li><strong>Planifier les activités :</strong> Participation à des réunions de planification hebdomadaires basées sur les méthodes agiles (Scrum), au cours desquelles les tâches étaient priorisées selon leur urgence et leur importance.</li>
        <li><strong>J'ai pu évaluer (par simple regard) les indicateurs de suivi du projet et analyser les écarts :</strong> Suivi des tâches attribuées via des outils de gestion de projet (ex : depuis Azure) et analyse des écarts entre les prévisions et les réalisations.</li>
        <li><strong>J'ai pu travailler au sein d'une équipe :</strong> Interaction régulière avec les développeurs backend, frontend, et responsables produit pour s'assurer que les nouvelles fonctionnalités répondent aux exigences initiales. Nous avions des réunions "informelles" tous les lundi pour connaitre l'avancée du projet.</li>
      </ul>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Technologies utilisées :</h3>
    <ul class="list-disc pl-6 text-white">
      <li><strong>Backend :</strong> SAP Commerce (Hybris), Java</li>
      <li><strong>Frontend :</strong> JavaScript, JSP</li>
      <li><strong>Base de données :</strong> SQL (manipulation de données volumineuses dans des bases complexes)</li>
      <li><strong>Méthodologie :</strong> Agile (Scrum) - Participation aux sprint meetings, daily stand-ups et revues de sprint.</li>
      <li><strong>Outils de gestion de projet :</strong> Azure</li>
    </ul>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Points marquants du projet :</h3>
    <ul class="list-disc pl-6 text-white">
      <li>Découverte et prise en main de <strong class="text-green-500">SAP Commerce (Hybris)</strong>, une solution e-commerce puissante utilisée par de nombreuses grandes entreprises.</li>
      <li>Premières contributions en <strong class="text-yellow-400">JavaScript</strong> sur une application en production, ce qui m'a permis de mieux comprendre les bonnes pratiques de développement.</li>
      <li>Compréhension des requêtes SQL complexes appliquées à de vastes bases de données, pour le suivi et l’amélioration des processus métiers.</li>
      <li>Expérience concrète du travail en équipe avec une méthodologie agile (Scrum), en participant activement aux réunions de planification, aux sprints et aux revues de projet.</li>
    </ul>

    <p class="mt-4 text-white">
      Ce projet m'a permis de m'immerger dans un environnement professionnel exigeant où j'ai pu développer mes compétences techniques et collaboratives. J'ai également pu comprendre les processus de maintenance et d'évolution d'une application complexe, en respectant des contraintes de sécurité, de performance et de qualité. Bien qu'impressionnant cette immersion m'a permis de comprendre les attentes et les obligations relatives aux contraintes temporelles avec des sprints parfois plus intenses que d'autres liés aux livraisons. Cette première participation a véritablement été le tremplin "technique" de mon apprentissage.
    </p>
  </div>
`],

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
    <h2 class="text-xl text-yellow-400 font-bold text-center">Développement de la présence en ligne de l'organisation</h2>

    <p>
      Lors de notre parcours à l'<span class="font-bold text-yellow-500">AFIP Formations</span>, nous avons pu suivre un module de développement web centré sur l'impact du référencement et son implémentation au sein d'un site web. Ce travail a permis de mettre en œuvre une stratégie visant à améliorer la visibilité en ligne de l'organisation tout en respectant les critères techniques imposés par les moteurs de recherche comme <span class="text-blue-400 font-bold">Google</span>.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Valorisation de l'image de l'organisation</h3>
    <p>
      Pour valoriser l'image de l'organisation sur les médias numériques, nous avons mis en place une <strong class="underline text-pink-500">charte graphique cohérente</strong> garantissant une identité visuelle homogène et attractive.
      Celle-ci comprend l'utilisation de codes couleurs spécifiques, de typographies adaptées, et d'une structure responsive visant à offrir une navigation intuitive à tous les utilisateurs, quels que soient leurs supports (ordinateur, tablette, mobile).
      Cette identité visuelle contribue à renforcer la crédibilité de l'organisation sur le web et à améliorer l'expérience utilisateur (UX), un critère pris en compte par les algorithmes de classement de <span class="text-blue-400 font-bold">Google</span>.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Référencement des services en ligne</h3>
    <p>
      Le référencement (SEO - Search Engine Optimization) est un aspect essentiel pour améliorer la visibilité d'un site web sur les moteurs de recherche. Pour atteindre cet objectif, nous avons utilisé une série d’outils spécialisés tels que <strong class="text-blue-500">GTmetrix</strong> et <strong class="text-purple-500">Wappalyzer</strong> :
    </p>
    <ul class="list-disc pl-5 mt-2">
      <li><strong class="text-blue-500">GTmetrix :</strong> Analyse de la performance du site en termes de vitesse de chargement, d’optimisation des images, de mise en cache, et de réduction du JavaScript/CSS. Ces optimisations techniques améliorent directement l’accessibilité du site pour les utilisateurs et son classement par les moteurs de recherche.</li>
      <li><strong class="text-purple-500">Wappalyzer :</strong> Identification des technologies utilisées sur un site web (CMS, frameworks, plugins SEO, etc.) pour garantir la conformité aux standards de référencement actuels.</li>
    </ul>

    <p>
      En termes de mise en œuvre, nous avons réalisé des tâches pratiques d'amélioration du référencement en utilisant le plugin <strong class="text-yellow-400">Yoast SEO</strong> de <strong class="text-yellow-400">WordPress</strong>, un CMS largement adopté et reconnu pour ses performances en matière de référencement naturel.
      <strong class="text-yellow-400">Yoast SEO</strong> permet d’optimiser chaque page ou article selon des critères de SEO tels que l’utilisation de balises HTML (titre, méta-description), la structure des URL, la lisibilité du contenu, et l’optimisation des mots-clés.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Exploitation des données du site web</h3>
    <p>
      Pour améliorer continuellement la présence en ligne de l'organisation, nous avons utilisé les données issues de l'analyse du site web.
      Cela inclut l’exploitation des rapports générés par <strong class="text-blue-500">GTmetrix</strong> pour identifier les zones à optimiser, et par <strong class="text-purple-500">Wappalyzer</strong> pour garantir la compatibilité avec les standards technologiques modernes.
    </p>
    <p>
      En parallèle, nous avons également mesuré l’impact des modifications apportées grâce aux outils d’analyse intégrés, ce qui nous a permis de valider les améliorations effectuées et d'affiner la stratégie de référencement en fonction des données collectées.
    </p>

    <h3 class="text-lg text-yellow-400 font-bold mt-4 mb-2">Critères pris en compte par Google :</h3>
    <ul class="list-disc pl-5 mt-2">
      <li><strong class="text-yellow-400">La pertinence des mots-clés :</strong> Identification des termes les plus recherchés, optimisation de leur placement et de leur fréquence au sein des pages.</li>
      <li><strong class="text-yellow-400">La qualité des liens entrants (backlinks) :</strong> Obtention de liens de qualité qui témoignent de la popularité et de la fiabilité du site.</li>
      <li><strong class="text-yellow-400">L'expérience utilisateur :</strong> Amélioration de la vitesse de chargement, réduction du taux de rebond, et compatibilité mobile.</li>
      <li><strong class="text-yellow-400">Le contenu frais et régulièrement mis à jour :</strong> Priorisation par <span class="text-blue-400 font-bold">Google</span> des contenus dynamiques et pertinents.</li>
    </ul>

    <p class="mt-4 text-white">
      Grâce à ces outils et méthodologies, nous avons pu optimiser nos projets pour répondre efficacement aux critères de référencement et améliorer leur visibilité sur le web, tout en assurant une présence en ligne cohérente, pérenne et mesurable.
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
