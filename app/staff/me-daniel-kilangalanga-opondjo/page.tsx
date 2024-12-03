import CVModel from "@/components/cv/model";
import MarketingWord from "@/components/marketing-word/marketing-word";
import PageBanner from "@/components/page-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maitre Daniel KILANGALANGA OPONDJO",
    description: "Avocat Près la Cour d’Appel/RDC ONA 10728",
  };
export default function MeDaniel() {
    const data = [
        {
            section:"INFORMATION PERSONNEL",
            info:[
                {
                    name:"Tel",
                    info:"+243 974645748 | 810820859| 853932531"
                },
                {
                    name:"Adresse",
                    info:"daniel@alarm-congo.org"
                }
            ]
        },
        {
            section: "EDUCATION",
            educations: [
                {
                    date: "Aout 2012",
                    lieu: "GOMA RDC",
                    uni: "UNIVERSITE DE GOMA",
                    cert: "Diplôme de Licence en Droit.",
                },
                {
                    date: "Aout 2010",
                    lieu: "GOMA RDC",
                    uni: "UNIVERSITE DE GOMA",
                    cert: "Diplôme de Grade en Droit.",
                },
                {
                    date: "JUILLET 2007",
                    lieu: "GOMA RDC",
                    uni: "INSTITUT DE BUTEMBO",
                    cert: "Diplôme d’Etat en Science Commerciale et Administrative.",
                },
                {
                    date: "EN COURS",
                    lieu: "GOMA RDC",
                    uni: "UNIVERSITE DE GOMA",
                    cert: "Master complémentaire en Droit International Public.",
                },
            ],
        },
        {
            section: "EXPERIENCE PROSSIONNELS",
            experience_prossionnels: [
                {

                    titre: {
                        ci: "ALARM RDC",
                        desc: "Gestionnaire de la clinique juridique",
                        lieu: "Goma 2020 à ce jour"
                    },
                    experiences: [
                        "Supervision des activités et suivi des dossiers devant les Cours et Tribunaux.",
                        "Conduite de recherches approfondies sur des sujets liés au développement durable.",
                        "Collecte et analyse des données sur les violations des droits humains et présentation des résultats.",
                        "Rédaction de rapports détaillés pour sensibiliser le public aux problèmes sociaux.",
                        "Collaboration avec des chercheurs locaux pour mener des études sur le terrain.",
                        "Conception et mise en œuvre du système de Suivi et d'Évaluation.",
                        "Accompagnement des victimes de violences basées sur le genre.",
                        "Assistance judiciaries des personnes vulnérables.",
                        "Identification, recherche familiale, accompagnement juridique, libération et réinsertion sociale.",
                        "Organisation des formations, focus group et équipement des acteurs judicaires civils et militaires et leaders communautaires.",
                        "Sensibilisation des différentes couches sociales.",
                        "Elaboration des projets et gestion des budgets d’appui.",
                        "Appui matériel et financier aux instances judiciaires et pénitentiaires",
                    ]

                },
                {
                    section: "EXPERIENCE PROSSIONNELS",
                    titre: {
                        ci: "ALARM RDC",
                        desc: "Conseiller Genre, Protection.",
                        lieu: "Goma 2016-2020 à ce jour."
                    },
                    experiences: [
                        "Appui matériel et financier aux instances judiciaires et pénitentiaires.",
                        "Conception, analyse et mise en œuvre des programmes visant à promouvoir l’égalité de genre dans différents secteurs (Education, santé…).",
                        "Collecte et analyse des données sur les inégalités de genre, les discriminations, exploitations et abus sexuels afin d’orienter les actions de plaidoyer.",
                        "Elaboration et mise en œuvre des plans d’actions permettant à satisfaire aux besoins des personnes marginalisées.",
                        "Elaboration de politiques et recommandations pour favoriser une approche genre dans les organisations partenaires.",
                        "Direction et accompagnement de l’équipe sur terrain avec tous les équipements nécessaires pour le programme.",
                        "Analyse des inégalités entre les sexes et des obstacles auxquels les jeunes (femmes et filles) sont confrontés en identifiant les besoins spécifiques des jeunes dans différents domaines de la vie et élaborer des stratégies pour y remédier",
                        "Analyse de la protection et des risques pour évaluer la protection existante et les risques potentiels.",
                        "Collaboration avec les parties prenantes pour faciliter la mise en œuvre efficace des projets."
                    ]
                },
                {
                    section: "COMMISSION INDEPENDANTE D’EXAMEN DES ALLEGATIONS D’EXPLOITATION ET D’ABUS SEXUELS COMMIS AU COURS DE LA RIPOSTE A LA MALADIE A VIRUS EBOLA EN RDC ",
                    titre: {
                        ci: "Membre de la commission",
                        desc: "",
                        lieu: "Goma, Beni Mai à Novembre 2021"
                    },
                    experiences: [
                        "Mener les enquêtes ensemble avec l’équipe.",
                        "Ecouter et orienter les victimes et témoins.",
                        "Analyser les témoignages et les filtrer.",
                        "Rédiger des rapports."
                    ]
                },
                {
                    section: "ALARM RDC ",
                    titre: {
                        ci: "Conseiller Genre, Protection",
                        desc: "",
                        lieu: "Goma 2020-2023."
                    },
                    experiences: [
                        "Consultations juridiques aux détenus",
                        "Relever les irrégularités de détention et faire le suivi des cas irréguliers.",
                        "Former des groupes de sensibilization.",
                        "Faire le rapport."
                    ]
                },
            ]
        },
        {
            section:"COMPETENCES ET INTERETS",
            competences_interets:{
                comp:"Maitrise de Word, Excel, power point, Accès",
                langues:[
                    {
                        nom:"Français",
                        aptitute:"Ecrit, parlé et écoute (Très biens)"
                    },
                    {
                        nom:"Kiswahili",
                        aptitute:"Ecrire, parler et écouter (Très bien)"
                    },
                    {
                        nom:"Kinande",
                        aptitute:"Ecrire, parler et écouter (Très bien)"
                    },
                    {
                        nom:"Anglais",
                        aptitute:"Ecrire, parler et écouter (Très bien)"
                    },
                    {
                        nom:"Lingala",
                        aptitude:"écrire, parler et écouter (Bien)"
                    }

                ],
                expertise:"Protection, la recherche et l’analyse",
                centre:"Lecture, sport, voyage et cuisine" 
            }
        },
        {
            section:"AUTRES FORMATIONS",
            formations:"PSHAA, PSEA, BSAFE, CPMS (certificats) Leadership, gestion et évaluation de projet, …",
             formation:[
                 {
                     nom:"ALARM-RDC",
                     desc:"Daniel KILANGALANGA. +243974645748 daniel@alarm-congo.org"
                 },
                 {
                     nom:"Barreau du Nord-Kivu ",
                     desc:"Me Félicien HITIMANA, bâtonnier de l’ordre +243999433272 ; felicienhiti@yahoo.fr"
                 },
                 {
                     nom:"Commission indépendante",
                     desc:"Madame Holo Makwaia, Cheffe de l’équipe, makwai"
                 }
             ]
        },
    ]
    return (
        <>
            <PageBanner image="/assets/img/DSC_0547.JPG" title="Maitre Daniel KILANGALANGA OPONDJO" />
            <CVModel 
                data={data}
                title="Maitre Daniel KILANGALANGA OPONDJO"
                image="/assets/img/DSC_0547.JPG"
            />
            <MarketingWord />
        </>
    )
}