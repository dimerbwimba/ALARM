import MarketingWord from "@/components/marketing-word/marketing-word";
import PageBanner from "@/components/page-banner";
import CVModel from "@/components/cv/model"
export const metadata: Metadata = {
    title: "NZABONIMPA SEZIBERA Apollinaire",
    description: "Directeur Pays ALARM-Congo",
  };

export default function NzaboSeziraApollinaire(){
    const data = [
        {
            section:"INFORMATION PERSONNEL",
            info:[
                {
                    name:"Nom",
                    info:"NZABONIMPA"
                },
                {
                    name:"Post nom ",
                    info:"SEZIBERA"
                },
                {
                    name:"Prénom",
                    info:"Apollinaire"
                },
                {
                    name:"Lieu et date de naissance",
                    info:"KAULIRO, le 04/04/1969"
                },
                {
                    name:"Nom du père ",
                    info:"SEZIBERA  Albert"
                },
                {
                    name:"Nom de la mère",
                    info:"BARAYAZI"
                },
                {
                    name:"Nom du père ",
                    info:"SEZIBERA  Albert"
                },
                {
                    name:"Etat civil  ",
                    info:"Marié  à Madame SIFA  Jeanne et père de 5 enfants"
                },
                {
                    name:"Nationalité",
                    info:"Congolaise, Province du Nord Kivu"
                },
                {
                    name:"Quartier",
                    info:"KYESHERO"
                },
                 {
                    name:"Email",
                    info:"apollinaire@alarm-congo.com"
                },
                 {
                    name:"Tél",
                    info:"+243853282801,+243975055874"
                }
            ]
        },
        {
            section: "EDUCATION",
            educations: [
                {
                    date: "De 2002-2007",
                    lieu: "Etudes universitaires  à l’Institut Supérieur de Développement Rural de Grands Lacs ISDR/GL ;",
                    uni: "",
                    cert: "1. Obtention d’un diplôme de licence en Développement Rural, Option planification Régionale et Nationale.",
                },
                {
                    date: "De 1984-1990",
                    lieu: "Institut KAEMBE de BURUNGU",
                    uni: "",
                    cert: "2. Obtention  d’un Diplôme d’état en  en Pédagogie Générale.",
                },
                {
                    date: "De 1976 - 1984",
                    lieu: "Ecole primaire  à KIBARIZO",
                    uni: "",
                    cert: "3. Obtention d’un Certificat d’études  primaires.",
                },
            ],
        },
        {
            section: "SERVICES  RENDUS",
            experience_prossionnels: [
                {

                    titre: {
                        ci: "De 1991 à nos jour",
                        desc: "",
                        lieu: ""
                    },
                    experiences: [
                        "> De 1991-1994 : Enseignant  à l’école primaire  Hekima de Goma.",
                        "> De  1997-2002 : Enseignant à l’Institut  Moriya  de Goma.",
                        "> De 2002-2008 : Directeur  du BDC (Bureau de Développement  Communautaire) au sein de  la 34è CADAF/Nord –Kivu , (Travail bénévole ).",
                        "> Du 12 au 24/11/ 2007 : Formation sur l’approche psychosociale à WAR  CHILD",
                        "> De  2005-2008 : Formateur et chargé de suivi  dans le projet de  Micro finance  à   ALARM/Congo.",
                        "> De 2006-2007   : Assistant social  chargé d’encadrement, suivi et réunification  des enfants démobilisés  à l’ONG CAJED.",
                        "> De 2008-2009 : Directeur du campus  de l’ISDR/GL à RUTSHURU /KIWANJA.",
                        "> De 2010 -2011 : Animateur à la CARITAS dans le projet d’appui à la réinsertion socioéconomique des ménages retournés  en collectivités de Bashali et Bahunde.",
                        "> De 2009- 2012 : Directeur  du Campus de  l’ISDR/GL NYAKARIBA",
                        "> De 2009- 2012 : Directeur  du Campus de  l’ISDR/GL NYAKARIBA.",
                        "> De 2012-2014 : Chargé  de l’Intendance à l’ISDR/GL",
                        "> De 2014-2016 : Chargé  des projets à l’ISDR/GL",
                        "> Le 21 Août 2018 : Notification au  grade de CT. à l’ISP/ NGUNGU",
                        "> Le 12 Novembre 2020: Notification au poste de chercheur à  l’INERA- MASISI",
                        "> Le 15 Nov 2023: Country Director to ALARM-DR.Congo.  Transforming Communities."
                    ]

                },
            ]
        },
        {
            section:"DOMAINE  DE RECHERCHE",
            competences_interets:{
                comp:"Agriculture, (Production, Conditionnement, Transformation  et écoulement de Produits Vivriers).",
               
            }
        },
        {
            section:"DIFFERENTES FORMATIONS RECUES",
             formation:[
                 {
                     nom:"Le 13 Sept2015 : ",
                     desc:"Brevet de formation de l’ONGD LACOMM sur la notion de Géographie et techniques de SIG avec AGIS (Théorie et pratique)."
                 },
                 {
                     nom:"Le 12Aout 2022 : ",
                     desc:"Certificat de  participation à l’atelier organisé par I.HEAD AFRICA en collaboration avec KIVU SOLUTION."
                 },
                 {
                     nom:"Du  17  au 20 Oct. /2022 :",
                     desc:"Participation à l’Atelier de formation sur la sensibilisation et communication organisé par l’OBPE et le programme CEBIos organisé à Bujumbula."
                 }
             ]
        },
         {
            section:"PUBLICATIONS ET TRAVAUX  REDIGES",
             formation:[
                 {
                     nom:" Le commerce informel des produits agro-pastoraux dans la lutte contre la pauvreté « Cas du groupement de BASHALI KAEMBE » ",
                     desc:""
                 },
                 {
                     nom:"Etat de conservation des terres arables dans le groupement Bashali-Kaembe en Territoire de Masisi dans la province du Nord Kivu.",
                     desc:""
                 },
                 {
                     nom:"La contribution de la culture maraichère dans l’économie des ménages en Territoire de Masisi, Localité de Nyamitaba.",
                     desc:""
                 }
             ]
        },
        {
            section:"LANGUES  PARLEES",
             formation:[
                 {
                     nom:"Swahili, Kinyarwanda, Français et un peu d’anglais.",
                     desc:""
                 },
             ]
        },
    ]
    return (
        <>
            <PageBanner image="/assets/img/directeur-alarm.JPG" title="CT. NZABONIMPA SEZIBERA Apollinaire" />
            <CVModel image="/assets/img/directeur-alarm.JPG" data={data} title={"Directeur Pays ALARM-CONGO"}/>
            
            <MarketingWord/>
        </>
    )
}