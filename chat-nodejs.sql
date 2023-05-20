-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 14 fév. 2023 à 18:34
-- Version du serveur : 5.7.36
-- Version de PHP : 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `chat-nodejs`
--

-- --------------------------------------------------------

--
-- Structure de la table `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `message` varchar(1000) NOT NULL,
  `created_at` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_chat` int(11) NOT NULL,
  `isGeneral` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `nom`) VALUES
(1, 'utilisateur'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `pseudo` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_role` int(11) NOT NULL DEFAULT '1',
  `urlAvatar` varchar(155) DEFAULT NULL,
  `last_co` datetime DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `mail`, `pseudo`, `password`, `firstname`, `lastname`, `created_at`, `id_role`, `urlAvatar`, `last_co`, `language`) VALUES
(1, 'test@gmail.com', 'testing1', 'testtest', 'test', 'test', '2023-01-06 15:43:58', 1, '', NULL, ''),
(16, 'lucas@hotmail.fr', 'maxou31', '$2a$10$QlcYkFmCutlmBRo6DWVy/uO.D33dX9n6fvCFQkf9QH/aZ0i0CByz.', 'max', 'maxo', '2023-01-09 20:58:12', 1, '', NULL, ''),
(17, 'mourad@laplateforme.io', 'mouibaggyo', '$2a$10$yvgCQ6Oibo4XrcnPj8E.h.N9Ey6gIBUWDL8yIQCmpelDPjwqeYYoG', 'mouradtest45', 'boussiouf', '2023-01-16 14:56:04', 2, NULL, '2023-01-24 18:19:28', ''),
(18, 'moui@moui.fr', 'mouibaggyo2', '$2a$10$tSC00WeCSEsMeA75VQVUpenEsGqu1Q.ZYxjYeyeMFFMGSkKy6ByhG', 'Mourad', 'Boussiouf', '2023-01-17 17:55:45', 2, NULL, '2023-01-17 18:11:44', ''),
(19, 'mourad@gmail.com', 'mouibaggyo5', '$2a$10$FF.imqiDUP3.jhWepqXcJuuLegVFWC28C8ZxYtzBI0JxKQdW.PRey', 'mourad', 'boussiouf', '2023-01-20 14:14:36', 2, NULL, NULL, ''),
(20, 'dada@dada.fr', 'yyyyyyy', '$2a$10$LTFbMHS9wv/K3fK2KU6NnOHObSSRvn927dHfSYpLnp/S6XNlExdtC', 'toto', 'toto', '2023-01-25 22:50:30', 2, 'u5qa963ACC84C-8FCF-4369-9A9C-3D6A8A5CA34F.jpg', '2023-01-25 22:52:13', ''),
(21, 'toto@toto.fr', 'toyoto', '$2a$10$CFSFELgPCwlk0Bi1x2GiiufYWnhZmgHA74pxBFhGh75meZv/0gEkO', 'toto', 'toto', '2023-01-25 22:53:17', 2, 'qty6l9B8895CF-F635-45D2-9FB7-FFB2AA5C248B.jpg', '2023-01-25 22:54:47', ''),
(22, 'mourad@mourad.fr', 'totoro', '$2a$10$uTAaXfmcAdL8MYEC2ep6qOG8CFvHNJvC3WmexJxVKJ.8A7ZNsylE.', 'mourad', 'mourad', '2023-01-26 19:43:51', 2, '5ou2m22050DB9-1408-4AF4-8412-C8FB4DBA0330.jpg', '2023-01-26 19:45:05', '');

-- --------------------------------------------------------

--
-- Structure de la table `users_chats`
--

CREATE TABLE `users_chats` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_chat` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users_chats`
--
ALTER TABLE `users_chats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `users_chats`
--
ALTER TABLE `users_chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
