-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 09 avr. 2025 à 17:00
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `project_horizon`
--

-- --------------------------------------------------------

--
-- Structure de la table `factions`
--

CREATE TABLE `factions` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `histoire` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `factions`
--

INSERT INTO `factions` (`id`, `nom`, `histoire`) VALUES
(1, 'Armguard', 'Fondé par la druide du groupe , Dame Meterda'),
(3, 'SilverShield', NULL),
(4, 'IronBrawlers', NULL),
(5, 'RainGlades', NULL),
(6, 'Hollowell', NULL),
(7, 'La Forge Phoenix', NULL),
(8, 'Le Nouvel Ordre', NULL),
(9, 'SolarFlag', NULL),
(10, 'Les lames des Ambres', NULL),
(11, 'Brume Funeste', NULL),
(12, 'Clan Steelrage', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `memberships`
--

CREATE TABLE `memberships` (
  `id_membership` int(11) NOT NULL,
  `id_personnage` int(11) NOT NULL,
  `id_faction` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `memberships`
--

INSERT INTO `memberships` (`id_membership`, `id_personnage`, `id_faction`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `personnages`
--

CREATE TABLE `personnages` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `gender` varchar(1) NOT NULL DEFAULT 'n',
  `id_race` int(11) DEFAULT 1,
  `tagline` varchar(50) DEFAULT NULL,
  `bio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `personnages`
--

INSERT INTO `personnages` (`id`, `nom`, `gender`, `id_race`, `tagline`, `bio`) VALUES
(1, 'Eldan', 'M', 7, 'Spark of hope', 'Fils d\'Olwain qui vivaient dans le village de Lanazalia sous la surveillance de sa mère et sous la tutelle du mage Zander  après le départ de son père pour des raisons inconnues . \r\n\r\nIl pense que en devenant connue il pourrait au moins attirer l’attention de son père , sinon il voudrait  le retrouver lui - meme\r\n\r\nIl est très curieux du monde au-delà de son village natal et devient un chevalier-mage sans suivre le côté quelque peu lâche de son père. membre de la brigade Armguard\r\n'),
(2, 'Besk', 'M', 8, 'Fiery Warrior', 'Née de l’union d’un orc et d’une humaine, Besk est un demi-orc très optimiste qui est inspiré par son père et sa capacité à inspirer et à protéger.\r\n\r\nCinq ans plus tard , Années plus tard sa sœur Merisia née et devient vite une personne très chère pour lui.\r\n\r\nUn jour, alors que lui et sa petite sœur jouaient, elle fut prise par une fièvre terrible, qu’il découvrira être issue d’une malédiction démoniaque qui a faillit lui coûter la vie. \r\n\r\nAprès avoir assisté à la guérison par la prêtresse Glenia ( la femme de Barios), cela lui a permis de renforcer son envie de protèger tout le monde.\r\n\r\nIl décida de devenir chevalier - mage dans la région de wyvernheart , dans la guilde de Armguard dont le capitaine était devenu son père. Il avait choisi cette guilde pour suivre son père pour le voir à l\'action et devenir plus fort.\r\n'),
(3, 'Merisia', 'F', 8, 'I will make a name for myself', 'Née de l’union de Nariel , une humaine et Askaros un orc\r\nUn côté humaine plus prononcé\r\nLa peste écarlate l’avait frappée petite et lui a faillit coûter la vie\r\nDevenue Membre de Armguard\r\nSouhaite prouver à son père qu’elle a grandi\r\n'),
(4, 'Flowan', 'M', 1, 'Lightining Striker', 'Flowan est un jeune homme de 18 ans qui ressemble beaucoup à son père, Barios, lorsqu\'il était jeune. \r\n\r\n Il a également une grande peur de l\'échec et de la mort de ses proches, probablement à cause de la perte de sa mère pour laquelle il blâme son père. \r\n\r\nEn effet depuis la mort de mère, il a été placé dans un orphelinat de l\'église de la lumière, là-bas , il y est très impliqué dans le soin de l\'église mais aussi de protéger les plus faible.\r\n\r\nPendant son enfance, il a été également surveillé par Ronan, une personne qui a été prise sous l\'aile de Barios. \r\n\r\nPendant qu\'il essayait de comprendre ses pouvoirs, les éclairs étaient un cadeau empoisonné de Tiamat, la bête enfermé dans le corps de Barios\r\n\r\nMalgré cette colère envers Barios, Flowan est un membre loyal de la brigade Armguard et est prêt à mettre sa vie en danger pour protéger les autres.\r\n'),
(5, 'Tanseril', 'M', 2, 'Bookworm elf', '\r\nMembre de la noblesse, il avait poursuivi des études très jeunes dans un des plus grands instituts du royaume de Narendail\r\nQuand il a appris à se servir de sa magie de verrouillage, il a voulu essayer de s\'en servir pour aider les gens et les protéger\r\nAprès tout, les connaissances accumulées par les grimoires étudiés tous les nuits serviront… pas vrai?\r\n'),
(6, 'Zander', 'M', 1, 'Ancient Mage', 'Zander est motivé par le désir de transmettre ses connaissances et son expérience aux nouvelles générations de mages. Mais également être motivé par le désir de maintenir l\'équilibre entre les forces magiques et de prévenir toute menace contre le monde magique.\r\n\r\n'),
(7, 'Askaros', 'M', 4, 'Flame of Hope', 'Askaros est issue du clan Steelrage ( Rage d\'acier), fils du chef Raorr et d\'une shamane orc .\r\n\r\nIl a été élevé dans les purs traditions orc avec son frère Koragg mais aussi par leur mère.\r\n\r\nEn effet, leur père les apprenait à se battre, alors que leur mère essayait de leur faire comprendre la compassion et l\'empathie ainsi que la cohabitation avec les autres races.\r\n\r\nIl est entraîné par un des anciens du clan lui apprenant l\'art de la hache et du feu.\r\n\r\nEt lorsqu\'il fut assez grand et forte, il est envoyé en mission au nom du clan, bien que certaines missions soient inoffensif , d\'autres l\'était un peu moins et commence à douter des intentions de son père \r\n\r\nMais un jour, il finit par découvrir un complot liant le clan et le groupe des serviteur du Destructeur qui semble aussi inclure le sacrifice de sa mère qui l\'a voit se faire tuer par ses mains\r\n\r\nIl décida de partir et rejoindre l\'armée de la lumière\r\n\r\nUne fois dans l\'armée , il finit par se lier d\'amitié avec le orcs Bogram et Murook qui se considèrent comme frère d\'armes .\r\n\r\nIl finit par rencontrer l\'humaine Nariel et tombèrent éperdument amoureux .\r\n\r\nAprès la bataille de Pandore, Askaros obtient le rôle de capitaine de la brigade Armguard , sous la décision de l\'ancien capitaine et du conseil . \r\n\r\nMais entre-temps, bien qu\' il a eu deux enfants, Besk et Merisia,  il semble toujours troublé par ce qui lui ait arrivé :\r\nTrahison de son clan\r\nLa traque Inarrêtable des démons contre lui\r\nEt maintenant une femme et 2 morveux a protégé de ses desicions\r\nMais depuis la naissance de sa fille, il a pu trouver une motivation pour les protéger mais aussi respecter son devoir de capitaine pour protéger les citoyens de Wyvernheart et d\'obtenir leur respect\r\n\r\nEn plus de cela, ses enfants sont devenus chevaliers mages et est prêt à tout pour guider une nouvelle génération de mages\r\n'),
(8, 'Barios', 'M', 1, 'BeastKeeper du Chaos', 'Il est le fils d\'un chef d\'une troupe de mercenaire originaire de la nation désertique de Sharnar , mais a fini par quitter la troupe pour une patrouille de l\'armée de la lumière car “ il y avait quelque chose qui mérite que l’on se bat ” \r\n\r\nDans cette patrouille, il finit par développer des liens forts avec des personnages comme  Piodon  , Askaros ou encore Olwain dont il finiront par nouer une rivalité sans pareille  . \r\n\r\nUn jour lors d\'une patrouille il a failli mourir lors d\'une mission d\'envergure\r\n\r\nIl fut sauvé par un mage noir Malganis qui lui a implanté, a son insu , la bête du chaos en lui faisant de lui un porteur d\'une des bêtes fondateurs les  plus dangereuse que le monde ait connu.\r\n\r\n Après la fin de la guerre saint il finit par reprendre la brigade Night Hammer, abandonné depuis plusieurs années, veillant au agissements démoniaques tout en étant à la recherche de porteur des autres bêtes et finit par engager Luth , Ronan et enfin une mage nommé Glenia   dont il finit par épouser et donnèrent naissance à leur fils Flowain . \r\n\r\nDans sa relation avec Glenia , Ses collègues Ronan et Luth semblèrent étonné que Barois semblait sourire et vivre une vie heureuse avec sa  femme ce qu\'ils avaient pas vu depuis longtemps .  \r\n\r\nMais un jour lors d\'une mission et un face a face contre une représentation du démon enprisonneur d\'ames , Il reconnu l’aura de la bête du chaos que Barios reconnaît et sera traqué pendant plusieurs années \r\n\r\nIl fini par perdre sa femme sous ses yeux impuissants alors qu’elle essaya de protéger Flowan après avoir tenter de s\'en prendre à son fils .\r\n\r\nDepuis ce jour , bien qu’il est toujours actif dans sa brigade, il a aussi fait la promesse à sa défunt femme  de trouver un moyen de tuer celui qui lui a arracher celle qui a put lui apporter le bonheur dans sa vie au prix de laisser son fils Flowan dèrière dont le visage le fait souffrir dut à sa ressemblance avec sa femme lui faisant alors remonter des souvenirs heureux devenue lointain mais aussi son échec de ne pas avoir put protèger Les gens qui compter le plus pour lui. \r\n'),
(9, 'Olwain', 'M', 7, 'Vagabond', 'Ancien héros de la Seconde Guerre Sainte .\r\n\r\n Il avait pris sous son aile ,un elfe , Rendart , fils d\'un de ses camarades défunts avant de le voir impuissant tombé dans les ténèbres profondes.\r\n\r\nIl commença à écrire ses aventures dans un journal.\r\n\r\nQuelques années plus tard, il eut un enfant avec une libraire elf qui s\'appellera Eldan.\r\n\r\nIl continue ses voyages jusqu\'à ce qu’il rencontre Talfen , un enfant elf abandonné , il le prit sous son aile et lui enseigne tout ce qui concerne la magie. Jusqu’à ce qu’ils se séparent, apres qu’il ait découvert que Talfen s\'intéressa à la magie noire.\r\n\r\nAprès plusieurs échecs , il décide de tout enseigner à son fils Eldan mais il commence à se remettre en question sur son enseignement.\r\nIl demanda à son ancien mentor , Zander, de prendre soin de Eldan pour lui et de lui faire apprendre la magie\r\nIl indiqua que s\' il veut le retrouver, il devra qu’il soit un chevalier - mage et qu’il devienne renommé.\r\n'),
(10, 'Nariel ', 'F', 1, 'Mage Danseuse', 'Originaire du continent désertique de Gorgan mais decida d\'aller à Narendail avec un maître mage après avoir découvert son potentiel en magie'),
(11, 'Christa', 'F', 1, 'Compassion incarnée', 'Née avec sa soeur Jumelle Morgane dans une famille noble\r\nTrés complice avec sa soeur\r\nDispute avec sa sœur Morgane\r\nAssassinat de sa mère\r\nMorgane fugue \r\nChrista se sent responsable de son départ\r\nElle se jura de devenir plus fort pour protéger ce qui lui reste\r\nElle est prise sous l\'aile de sa garde Shawna \r\n'),
(12, 'Fenton ', 'M', 1, 'BeastKeeper de l\'Ordre', 'Fenton était le seul survivant du pillage de Terlean se qui la forcer à devenir paladin pour se venger,il finira par grimper les échelons au point de devenir le porteur de la bête de l\'ordre et de faut partie de la garde royale '),
(13, 'Shawna', 'F', 9, 'Archère Elaire', 'Fille d’un capitaine , elle est élevée très tôt dans l’art du combat\r\nRejoint l’armée de défense de Norlight \r\nTombe amoureuse de Piodon \r\nAppeler par l’armée de la lumière pour faire face au culte de la destruction\r\nA participer à la guerre de pandore en tant que chef d’escadron\r\nPiodon  doit se sacrifier pour sauver son escouade, Shawna s’en voudra pour l’avoir laisser mourir\r\nEst devenue Capitaine de la guilde de défense de Norlight alors que Piodon  était censé le devenir\r\n'),
(14, 'Talmond ', 'M', 1, 'Homme aux mirroirs', 'Sa femme est morte \r\nElle est conservée dans un cristal géant en essayant de la réveiller\r\n'),
(15, 'Ismmil', 'F', 9, 'Shamane rebelle', 'Son père est un chef drow qui contrôle une guilde d\'assassins\r\nElle est née d’une relation avec une captive\r\nSa mère s’est enfui pour la laisser loin de l’emprise de son père mais  finira par mourir sous l’assaut de ses assaillants envoyé par le chef\r\nElle fut récupéré par un elf-orc et il la considérera comme sa propre fille\r\nA été enseigné sur l\'art de communiquer avec les esprits de défunts\r\nSon maître meurt mais avant son dernier souffle , il lui confia son artéfact permettant de faire appel à des esprits guerriers pour la protéger\r\n'),
(16, 'Gillam', 'M', 10, 'Assasin des Brumes', 'Un ancien membre d\'une meute qui s\'est fait anéantir ainsi que le village où ils se trouvaient par une attaque lancer par un membre du culte de la destruction qui été une cible pour Gillam.\r\n\r\n En effet, de base il a été envoyé dans la base du membre pour le tuer du a de nombreux crimes qu\'il a commis, il se trouvaient dans ses quartiers non loin de la ville mais lorsqu\'il se trouva face a la cible il dit qu\'il est déjà tard du au fait qu\'il a déjà une attaque sur la ville d\'un air moqueur avant de se faire tuer par Gillam. \r\n\r\nQuand il arriva ,se fut une boucherie, ses amis et sa femme se sont fait massacré , dans les décombres ils retrouva son ami/frère Bolivar qui dans son dernier souffle, lui demande de prendre soin de sa fille Tohiba. Ce sera sa dernière parole avant qu\'il ne succombé à ses blessures quand il essaya de protéger sa petite fille \r\nSur ses paroles , Il la retrouve et, avec des survivants, ils réussissent à fuir et finissent par se réfugier dans la capitale de Wyvenheart.\r\n\r\nIl décida de fonder une guilde des assassin \r\n'),
(17, 'Tohiba', 'F', 10, 'Mechano intrepide', 'Elle ne se souvient pas de la vérité concernant la mort de ses parents biologiques et les origines du massacre mais Gilliam ne désire pas qu\'elle soit impliqué dû à sa promesse qu\'il avait fait à son père de la proteger\r\n\r\nUne jeune chimerian ,fille du loup Gillam après que leur clan s\'est fait  ,alors qu\'elle était bébé ,lors une attaque d\'un groupe du chaos sur le village de Minella là où se trouvent temporairement . Depuis ce moment, mais surtout depuis qu\'il est devenu chasseur de têtes de renom , son père adoptif Gilliam a dû la confier à son ami Mintron , un tavernier chimerian Ortus (une race d\'ours anthropomorphiques) faisant de lui son parrain. Elle fait partie de la compagnie de forge Phénix en tant que mécano où elle y a trouvé une nouvelle famille . Contrairement à son paternel et des autres de ses congénères , elle a pas une envie de sang lors de combat ,récurrent à sa race , elle semble perdre la tête lorsqu\'elle entend des coups de feu venant des armes qu\'elle a fabriqué à la forge , mais heureusement , son père  semble toujours garder un œil sur elle\r\n'),
(18, 'Kain', 'M', 10, 'Tonerre Rouge', 'un chimérien (lycanis) qui fait pour des forces armées de La région de Gledarius dans le continent de Atilus\r\n\r\nSuite à la promesse que son père a fait à un commandant disant que s\' il devait un jour mourir , que son ami prenne soin de son fils et l\'apprenne à se battre pour passer le flambeau . Suite à la mort de son père, le commandant Sternirn le prend sous son aille. Il peut maîtriser des éclairs mais le plus surprenant est qu\'il se bat avec une arme peu conventionnelle, un drapeau avec un mât en métal avec une bannière affichant le pays dont il défend les couleurs tout comme son père.\r\n'),
(19, 'Yliria', 'F', 5, 'BeastKeeper de la Vie', 'Elfe orpheline devenu porteur de la bête de la création , fille adoptive du dragon Arsym qui lui finit par lui léguait la protection de la forêt de Galdel et de sa grotte pleine de mana en étant accompagné par son frère adoptif le dragon Zalmir après la mort de leur père par les mains de Raorr Steelrage avant de se faire capturer , torturer et asservie par ce dernier dans le but, heureusement elle finit par se libérer de son géolier et jura de se venger de la mort de son père et d\'exterminer les orcs qui lui ont tous prit .'),
(20, 'Murook', 'M', 4, 'Moine libre', 'Un vagabond qui voyage de ville en ville pour profiter de ce que la vie peut , entraîner et s\'amuser avec des enfants issue d\'orphelinats , il en a profité pour adopter une très jeune demi-orc/demi-elf s\'appelant Kalia. Mais il s\'avère aussi qu\'il traîne aussi avec de nombreuses femmes de tavernes dû à son côté charmeur mais aussi ayant un grand cœur.\r\n\r\nIl est également capable de canaliser son énergie interne, appelée ki, pour augmenter sa force, sa vitesse et sa résistance aux dégâts. En utilisant des techniques de méditation et de respiration, il peut également atteindre un état de concentration extrême, lui permettant de prédire et d\'esquiver les attaques ennemies avec une grande agilité.\r\n'),
(21, 'Delar', 'M', 3, 'Para - Tonnerre vivant', 'Position sociales :\r\nVice-capitaine de la brigade Sunforge\r\nPersonnalité :\r\nTrès pédagogue \r\nTendance Maso\r\nTrès plaisantain\r\nChaleureux \r\n\r\nForces :\r\nIl a une assez grande résistance aux attaques\r\nFaiblesses :\r\nIl aime se prendre des éclairs\r\nil AIME se prendre des éclairs et il… aime ça de façon malsaine \r\nPeurs :\r\n\r\nSurnommé le paratonnerre vivant\r\n'),
(22, 'Raynard', 'M', 1, 'Tornade de la justice', 'A participé à de nombreuses battailles \r\nA rencontré une archère elfe qui deviendra sa femme\r\nA eu deux filles\r\nEst actuellement à la retraite … pour l’instant …\r\n'),
(23, 'Wrynn', 'M', 12, NULL, NULL),
(24, 'Malagar ', 'M', 3, NULL, NULL),
(25, 'Alva', 'F', 1, 'Danseuse des glaces', NULL),
(26, 'Ghorza', 'F', 4, 'Chasseuse de primes oppulante', 'Apres etre arriver à l’armée de Narendail, elle a put participer à de nombreuses batailles \r\nApres un certain temps, elle a fini par s’ennuyer et devenir chasseuse de primes. Avec le temps elle finit par former une guilde d’aventuriers autour de la chasse aux primes\r\nUne des raisons pour laquelle elle fait chasseuse de primes, c’est pour l’A.R.G.E.N.T …. \r\nl\'Aventure\r\nla Rage exaltant\r\nLa Grandeur de réputation\r\nl\'Extraordinaire satisfaction de la victoire\r\nla Négligence de l’autorité\r\nle Test des competences\r\nelle prefere ramener les cibles en vie pour avoir une prime en plus\r\n'),
(27, 'Galathée', 'F', 3, 'Guerriére avec les yeux dans les étoiles', 'Elle essaye d’avoir au moins 5 poils de menton pour montrer a valeu en tant que guerrière nain'),
(28, 'Emilie', 'F', 1, 'BeastKeeper de la creation', 'Une idéaliste qui essaye de trouver un moyen de rendre monde meilleu meme . Quand elle finit par  decouvrir qu’elle avait une capacité magique.\r\nUn jour , ele finit par etre choisi par Yasckbo, la bete primordial de la création. Cela lui permet d’utiliser la bete pour se battre, en plus du fait que contrairement aux autres betes primodiales, il y a pas de contrepartie pour devenir le beastkeeper de Yasckbo ,  mais etant donné qu’il existe dans un autre plan existentiel, il choisi lui meme son beastkeeper\r\nAu bout d’uncertain temps elle finit par rencontrer Barios, beastkeeper de Tiamat , la bete du chaos, chef de la guilde NightHammer qui enquete et combat les apparitions démoniaques. Il finit par la prendre sous son aille\r\n'),
(29, 'Echban', 'M', 1, 'Marionnettiste Excentrique', NULL),
(30, 'Ronan', 'M', 1, 'BeastKeeper de la destruction', 'Retrouver par Barios\r\nApprendre à contrôler son pouvoir\r\nLe bras possédé contre seulement l\'oeil pour Barios\r\nFormation des NightHammer \r\n'),
(31, 'Baram', 'M', 4, 'Péché de la colère ', 'Un Orc ayant été abandonnée par sa mère \r\nDevient vagabond très jeune et est très solitaire\r\ndevenu portant de la bête de la corruption\r\nRecueillie par Raorr et le pris sous son aile\r\ndevenir membre de la guilde des élèves des dieux démons Hollowell en tant que péché de la colère\r\n'),
(32, 'Drendir', 'M', 4, 'Berzerker incontrollable', 'Un guerrier Orc devenu Berserker avec un démon pour son clan avant de finir par succomber dans son côté démoniaque et effectua beaucoup de massacres. Dans ces massacres , les victimes entendent le rire qui se distincte des cries de ces victimes'),
(33, 'Morgane ', 'F', 4, 'Péché de la luxure', 'Complice avec sa soeur\r\nCache son pouvoir d’imitation\r\nRencontre Talfen lors d’un bal\r\nDispute avec sa soeur\r\nSa mere se fait mystérieusement assassinée\r\nTombe amoureuse de Talfen et le rejoint par Amour\r\n'),
(34, 'Rheldas', 'F', 24, 'Péché de l’envie', 'Issue d’une troupe de voleurs\r\nElle se sent seul et abandonnée avant de rencontrer Baram qui lui proposa de rejoindre sa  guilde , Hollowell\r\nDepuis , elle semble essayer d\'impressionner son “senpai” et reste la plupart du temps avec lui\r\n'),
(35, 'Ezekiel ', 'M', 20, 'Peché de la gourmandise ', 'Découvre la consommation d\'âmes permet de se protéger du soleil \r\nIl en a consommé une qui lui a produit une satisfaction énorme \r\nIl pense que la consommation d’âmes pourrait le rendre immortel \r\nIl a fait en sorte que son clan de vampire se fasse massacrer pendant le massacre de Weldinurg par une milice de l\'ordre des chevaliers, Pour consommer les âmes de ses confrères\r\nIl a été repéré par un membre du culte de la destruction et a rejoint Hollowell \r\n'),
(36, 'Talfen', 'M', 9, 'Péché de l’orgueil', 'Histoire :\r\nAncien élève de Olwain\r\nConsidérant ses enseignements comme insuffisante, il s’en va\r\ndevient membre d’une guilde de voleurs \r\nDeéveloppement :\r\nDécouvre le concept de Magie Noire \r\nUn membre d’un culte de la destruction le prend sous son aile\r\nIl pris le contrôle de son ancienne guilde et la renomma Hollowell \r\nLa magie noire et la puissance qui lui propose lui monte a la tête \r\nAntagoniste hésitant au début de l’histoire \r\n'),
(37, 'Raorr', 'M', 4, 'Flamme de la révolte ', 'Il souhaite par dessus tout l\'unité des orcs ( des plaines et du désert, demi-orcs ) qui a commettre des choses au détriment des autres races tels que faire un pacte avec les adorateurs du Destructeur , il est accompagné de son bras droit, son fils cadet Ko\'ragh et a prise sous son aile  Baram un jeune orc du désert et un demi-orc s\'appelant Dendos considérée comme le fils illégitime de l\'ancien chef de guerre Orc Krothu tué dans d\'étranges circonstances. Il est connu pour avoir affronté de nombreux adversaires comme le chevalier légendaire Raynard Windriver ou le dragon ancien Arsym dont il est le tueur. Cela est pas étonnant venant de sa force monstrueuse même pour un orc , en plus de cela , il arrive à maîtriser la technique héréditaire de la flamme écarlate connue comme la flamme des enfers'),
(38, 'Rendart', 'M', 26, 'Guerrier Brisé', 'Première élève de Olwain  Olwain le considère son premier  Finit par périr sous les yeux de son maitre Ressuscité et manipulé par les démons avec le pouvoirs d\'arrêt du temps'),
(39, 'Koragg', 'M', 4, 'La flamme de la vengeance ', 'Frère d’askaros\r\nDepuis le départ de son frère,il en veut à son frère de quitter et de trahir la cause des orcs pour rejoindre les oppresseurs , alors Askaros essaye de sauver l’honnêteté du clan qui risque de se retrouver entraîné dans un complot, Koragg lui trouve qu’il y a pas de solution pour avoir une unité aux sein des orcs\r\nIls se sont fait la promesse que dès lors qu’il se reverrons, il devront faire un combat à mort\r\n');

-- --------------------------------------------------------

--
-- Structure de la table `races`
--

CREATE TABLE `races` (
  `Id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `description` text DEFAULT NULL,
  `sous - espèce` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `races`
--

INSERT INTO `races` (`Id`, `nom`, `description`, `sous - espèce`) VALUES
(1, 'Humain', NULL, 0),
(2, 'Haut - Elf', NULL, 0),
(3, 'Nain', NULL, 0),
(4, 'Orc', NULL, 0),
(5, 'Elf Sylvain', NULL, 0),
(6, 'Elfs des ombres', NULL, 0),
(7, 'Elf sève', NULL, 0),
(8, 'Demi - Orc', NULL, 0),
(9, 'Demi - Elf', NULL, 0),
(10, 'Lycanis', NULL, 0),
(11, 'FoxHun', NULL, 0),
(12, 'Felindas', NULL, 0),
(13, 'Minos', NULL, 0),
(14, 'Porkling', NULL, 0),
(15, 'Hyrsud', NULL, 0),
(16, 'Dragonborn', NULL, 0),
(17, 'Dragon Ancien', NULL, 0),
(18, 'Chimèrien', NULL, 0),
(19, 'Neptarien', NULL, 0),
(20, 'Vampire', NULL, 0),
(21, 'Warforged', NULL, 0),
(22, 'Onis', NULL, 0),
(23, 'Elforcs', NULL, 0),
(24, 'Tiefling', NULL, 0),
(25, 'Homme - Singe', NULL, 0),
(26, 'Elf', NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la table `regions`
--

CREATE TABLE `regions` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `relations`
--

CREATE TABLE `relations` (
  `id` int(11) NOT NULL,
  `id_p1` int(11) NOT NULL,
  `id_p2` int(11) NOT NULL,
  `type` int(11) NOT NULL DEFAULT 0,
  `titre` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `relations`
--

INSERT INTO `relations` (`id`, `id_p1`, `id_p2`, `type`, `titre`, `description`) VALUES
(1, 7, 3, 7, 'Pere', 'Il est très surprotecteur envers elle surtout depuis qu’elle a mourir de la peste écarlate. Il semble que Askaros ne souhaite absolument pas qu\'elle utilise la magie voir même qu\'elle devienne chevalier mage. Cela semble s\'aggraver avec le fait qu\'elle est devenue membre de la brigade Armguard  dont il est le capitaine'),
(3, 2, 3, 7, 'Grand Frère', 'En tant que grand frère, Besk est un protecteur pour Merisia. Bien qu\'il est taquin avec sa petite sœur, il cherche surtout à l’inspirer à être une guerrière toute aussi forte'),
(4, 31, 34, 2, '\"Grand frère\"', 'Baram est pas trop irrité aussi facilement par sa présence, il a presque un rôle de grand frère pour elle,'),
(5, 31, 32, 6, 'Haït', 'Il hait son père Drendir surtout dû au fait que c’est lui qui lui a implanté la bête de la corruption BlackHorn et surtout que malgré sa détention et dans la prison du tartare où il est enfermée et enchaînée, sa présence en lui se fait ressentir'),
(6, 31, 2, 3, 'Rival', 'Il compte mesurer sa force avec lui dut aux fait qu\'il est desendant de Raorr, qui est son mentor, pour voir si il est digne de son nom'),
(7, 31, 37, 5, 'Élève', 'Un chef de guerre d\'un des clans orc le plus influent de vandora , qui a passé un accord avec le culte de la destruction a choisi d\'envoyer baram chez Hollowell comme preuve qu\'il est en accord avec eu'),
(8, 2, 7, 7, 'Fils', 'Il considère son père comme un modèle dû à son statut et malgré son léger absence à son égard Il voit en lui ce qu\'il rêve de pouvoir être à savoir pouvoir protéger les gens . Tout comme son père , bien que Askaros essaye d\'éloigner à ses enfants des dangers des traditionalistes Orcs, il s\'avère que Besk semble adopter certaines valeurs essentiels des orcs comme l\'amour du combat , la détermination ou l\'honneur en terme générale qui sont des valeurs partagées entre lui et son père tout comme le pouvoir d\'élément feu et éventuellement du feu écarlate qu\'il a hérité de son père'),
(9, 2, 10, 7, 'Fils', 'Besk aime beaucoup sa mère. Elle lui racontait des histoires de héros avant de dormir, elle l’a même soutenu pour rejoindre la guilde de son père. Faut dire qu’il a aussi hérité du caractère extraverti de sa mère, surtout du au fait qu\'il est beaucoup plus relâché dans ses discussions comparé à son père. Le fait que Askaros protège sa famille le pousse à se surpasser pour protéger sa famille quand Askaros ne sera plus là '),
(10, 4, 8, 7, 'Fils', 'Il hait son père'),
(11, 8, 4, 7, 'Père', 'Il est en froid avec son fils.\r\nIl ose plus regarder son fils dans les yeux dut à sa ressemblance avec sa femme lui faisant alors remonter des souvenirs heureux devenue lointain. '),
(12, 10, 8, 6, 'N\'est pas fan', 'Nariel déteste Barios en termes de vibe . Disons que les premières impressions de Barios pour Nariel ne sont pas trop bien passées. Disons que tout semblait bien se passer, faut dire qu\'il sont tous les deux issues de la région de Gorkan , elle le considère comme un \"grand frère\" et puis il a ouvert sa bouche…\r\n'),
(13, 3, 10, 7, 'Fille', 'Elle est très bien soutenue par sa mère , elle a confiance au fait qu\'elle est puissante , c’est en partie grâce à elle que Merisia est membre de Armguard , dut au fait qu\'elle la faisait apprendre la magie'),
(14, 3, 2, 7, 'Soeur', 'La plus intelligente des deux , elle est souvent taquine avec son frère, mais cela n’empêche pas qu’elle est admirative envers lui\r\n'),
(15, 3, 4, 1, 'Amoureuse', 'Elle l’avait brièvement après sa guérison par glenia. Sa compassion pour les autres l’a beaucoup rapproché de Flowan car elle veut comprendre la souffrance qui ronge Flowan quand il rejoint la guilde , ce qui le pousse à se renfermer sur lui.'),
(16, 39, 7, 7, 'Frère cadet', 'Il en veut à son frère de quitter et de trahir la cause des orcs pour rejoindre les oppresseurs.\r\nIls se sont fait la promesse que dès lors qu’il se reverrons, il devront faire un combat à mort'),
(17, 37, 31, 5, 'Maitre', 'Il avait pendant un temps pris sous son aile Baram avant d\'être confiée à la guilde Hollowell. Raorr lui a aussi dévoiler les vérités sur son père.\r\n'),
(18, 37, 22, 3, 'Enemmi juré', 'Ils se confrontés de nombreuses fois lors de nombreuses batailles'),
(19, 34, 31, 2, 'Admiratrice', 'elle semble essayer d\'impressionner son “senpai” et reste la plupart du temps avec lui'),
(20, 10, 7, 1, 'Femme', NULL),
(21, 7, 10, 1, 'Mari', NULL),
(22, 9, 1, 7, 'Père', NULL),
(23, 1, 9, 7, 'Fils', NULL),
(24, 1, 4, 3, 'Rival', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `relationtypes`
--

CREATE TABLE `relationtypes` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `relationtypes`
--

INSERT INTO `relationtypes` (`id`, `type`) VALUES
(1, 'Amour'),
(2, 'Amitié'),
(3, 'Rivalité'),
(4, '¨Platonique'),
(5, 'Mentor/Eleve'),
(6, 'Conflit'),
(7, 'Famille');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `factions`
--
ALTER TABLE `factions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `memberships`
--
ALTER TABLE `memberships`
  ADD PRIMARY KEY (`id_membership`),
  ADD KEY `fk_member` (`id_personnage`),
  ADD KEY `fk_faction` (`id_faction`);

--
-- Index pour la table `personnages`
--
ALTER TABLE `personnages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_race` (`id_race`);

--
-- Index pour la table `races`
--
ALTER TABLE `races`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `relations`
--
ALTER TABLE `relations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_p1` (`id_p1`),
  ADD KEY `fk_p2` (`id_p2`),
  ADD KEY `fk_type` (`type`);

--
-- Index pour la table `relationtypes`
--
ALTER TABLE `relationtypes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `factions`
--
ALTER TABLE `factions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `memberships`
--
ALTER TABLE `memberships`
  MODIFY `id_membership` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `personnages`
--
ALTER TABLE `personnages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT pour la table `races`
--
ALTER TABLE `races`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `regions`
--
ALTER TABLE `regions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `relations`
--
ALTER TABLE `relations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `relationtypes`
--
ALTER TABLE `relationtypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `memberships`
--
ALTER TABLE `memberships`
  ADD CONSTRAINT `fk_faction` FOREIGN KEY (`id_faction`) REFERENCES `factions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_member` FOREIGN KEY (`id_personnage`) REFERENCES `personnages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `personnages`
--
ALTER TABLE `personnages`
  ADD CONSTRAINT `fk_race` FOREIGN KEY (`id_race`) REFERENCES `races` (`Id`) ON DELETE SET NULL;

--
-- Contraintes pour la table `relations`
--
ALTER TABLE `relations`
  ADD CONSTRAINT `fk_p1` FOREIGN KEY (`id_p1`) REFERENCES `personnages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_p2` FOREIGN KEY (`id_p2`) REFERENCES `personnages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_type` FOREIGN KEY (`type`) REFERENCES `relationtypes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
