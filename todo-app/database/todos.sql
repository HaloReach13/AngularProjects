-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2026. Máj 27. 12:57
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `todo_db`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `deadline` datetime NOT NULL,
  `completionStatus` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `todos`
--

INSERT INTO `todos` (`id`, `description`, `deadline`, `completionStatus`, `createdAt`, `updatedAt`) VALUES
(1, 'Bevásárlás a hétvégére', '2026-05-30 00:00:00', 0, '2026-05-27 10:53:20', '2026-05-27 10:54:50'),
(2, 'Adatbázis házi feladat leadása', '2026-05-20 00:00:00', 0, '2026-05-27 10:53:20', '2026-05-27 10:53:20'),
(3, 'Angular projekt struktúra kialakítása', '2026-05-25 00:00:00', 1, '2026-05-27 10:53:20', '2026-05-27 10:53:20'),
(4, 'Biztonságtechnika beadandó megírása', '2026-05-15 00:00:00', 0, '2026-05-27 10:53:20', '2026-05-27 10:53:20'),
(5, 'Készülni a következő ZH-ra', '2026-06-02 00:00:00', 0, '2026-05-27 10:53:20', '2026-05-27 10:53:20');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
