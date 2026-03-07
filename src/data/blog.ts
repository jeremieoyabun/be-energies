import type { BlogArticle } from "@/lib/types";

// ---------------------------------------------------------------------------
// Article 1 — Rentabilité panneaux solaires 2026
// ---------------------------------------------------------------------------
const bodyPanneauxRentables = `
<p class="lead">En 2026, la question revient sans cesse : "Est-ce que ça vaut encore la peine d'installer des panneaux solaires en Wallonie ?" La réponse courte : oui, et le retour sur investissement reste parmi les meilleurs placements accessibles à un ménage belge. Mais il faut comprendre les vrais chiffres, pas ceux des publicités Facebook.</p>

<p>Je suis Benoît Dezso, ancien inspecteur agréé en conformité électrique. Pendant des années, j'ai inspecté des installations solaires — les bonnes et les mauvaises. Ce que j'ai appris, c'est que la rentabilité dépend moins du prix des panneaux que de la qualité du dimensionnement, du taux d'autoconsommation et de la compréhension du cadre tarifaire. Voici le calcul réel, sans embellissement.</p>

<h2>Ce qui a changé depuis 2020</h2>

<p>Deux changements majeurs ont semé le doute chez les propriétaires wallons :</p>

<ul>
  <li><strong>Le tarif prosumer</strong> — une redevance annuelle pour l'utilisation du réseau, appliquée à tous les producteurs d'électricité décentralisée.</li>
  <li><strong>Le compteur communicant (smart meter)</strong> — qui mesure désormais les prélèvements et les injections séparément, au lieu de laisser le compteur "tourner à l'envers".</li>
</ul>

<p>Beaucoup de propriétaires en concluent que "les panneaux ne sont plus rentables". C'est une conclusion fausse basée sur une comparaison avec un système qui n'existe plus. La bonne question est : <strong>quel est le retour réel aujourd'hui, en tenant compte de ces coûts ?</strong></p>

<h2>Les deux régimes : avant et après le 1er janvier 2024</h2>

<p>La date de mise en service de votre installation détermine votre régime tarifaire :</p>

<ul>
  <li><strong>Avant le 1er janvier 2024</strong> : vous bénéficiez de la compensation (compteur qui "tourne à l'envers") jusqu'au 31 décembre 2030. Le tarif prosumer s'applique néanmoins.</li>
  <li><strong>À partir du 1er janvier 2024</strong> : pas de compensation. L'électricité injectée est comptabilisée séparément et valorisée au tarif d'injection de votre fournisseur (entre 1 et 6 c/kWh selon le contrat).</li>
</ul>

<p>Dans les deux cas, <strong>l'autoconsommation reste le levier de rentabilité principal</strong>. Chaque kWh que vous consommez directement vaut environ 38 c/kWh (prix évité sur votre facture), alors qu'un kWh injecté ne vous rapporte que 1 à 6 centimes.</p>

<h2>Combien coûte le tarif prosumer par GRD ?</h2>

<p>Le montant du tarif prosumer dépend de votre gestionnaire de réseau de distribution (GRD). Voici les montants annuels par kWe de puissance onduleur :</p>

<table>
  <thead>
    <tr>
      <th>GRD</th>
      <th>Tarif annuel (EUR/kWe/an)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>ORES</td><td>85,84</td></tr>
    <tr><td>RESA</td><td>84,22</td></tr>
    <tr><td>AIEG</td><td>81,04</td></tr>
    <tr><td>AIESH</td><td>99,29</td></tr>
    <tr><td>REW</td><td>93,00</td></tr>
  </tbody>
</table>

<p>Pour une installation de 4,7 kWc avec un onduleur de puissance équivalente en zone ORES, cela représente environ <strong>403 EUR par an</strong>. C'est un coût réel, mais il ne fait pas disparaître la rentabilité — il la réduit.</p>

<h2>Le calcul concret : installation de 4,7 kWc en 2026</h2>

<h3>Hypothèses</h3>
<ul>
  <li>Installation 4,7 kWc, orientation sud, inclinaison 35 degrés</li>
  <li>Production annuelle estimée : ~4 200 kWh</li>
  <li>Taux d'autoconsommation : 37-40 % (hypothèse CWaPE : 37,76 %)</li>
  <li>Prix de l'électricité évité : 0,38 EUR/kWh</li>
  <li>Tarif d'injection moyen : 0,03 EUR/kWh</li>
  <li>Coût installé clé en main : 6 500 - 8 000 EUR (TVA 6 % rénovation)</li>
  <li>Tarif prosumer (ORES) : 403 EUR/an</li>
</ul>

<h3>Revenus annuels estimés</h3>
<ul>
  <li>Autoconsommation (1 600 kWh x 0,38 EUR) : <strong>~608 EUR</strong></li>
  <li>Injection surplus (2 600 kWh x 0,03 EUR) : <strong>~78 EUR</strong></li>
  <li>Tarif prosumer : <strong>-403 EUR</strong></li>
  <li><strong>Gain net annuel : ~283 EUR</strong> (scénario conservateur, sans optimisation)</li>
</ul>

<p>Avec une optimisation de l'autoconsommation (programmation du chauffe-eau, machine à laver en journée, etc.), le taux monte facilement à 50-60 %, ce qui porte le gain net annuel à <strong>500-700 EUR</strong>.</p>

<h3>Retour sur investissement</h3>
<ul>
  <li>Scénario conservateur (37 % autoconsommation) : <strong>retour en 7-8 ans</strong></li>
  <li>Scénario optimisé (55 % autoconsommation) : <strong>retour en 5-6 ans</strong></li>
  <li>Scénario avec batterie domestique : retour plus long mais gains plus élevés à terme</li>
</ul>

<p>Sur 25 ans de durée de vie des panneaux, le gain cumulé se situe entre <strong>20 000 et 35 000 EUR</strong> selon le profil de consommation et l'évolution des prix de l'énergie. Cela représente un rendement annuel d'environ <strong>12 %</strong> sur l'investissement initial — bien au-dessus de n'importe quel livret d'épargne.</p>

<h2>Le tarif IMPACT : un avantage pour les nouveaux installateurs</h2>

<p>Depuis 2025, le tarif IMPACT remplace progressivement le tarif capacitaire classique. Ce tarif pénalise les pics de consommation et récompense une consommation lissée. Pour les propriétaires de panneaux solaires, c'est une opportunité : en déplaçant la consommation vers les heures de production, vous réduisez votre facture réseau. <a href="/services/batteries-domestiques/">L'ajout d'une batterie domestique</a> amplifie encore cet avantage.</p>

<h2>Ce qu'on ne vous dit pas (et qui change tout)</h2>

<p>En tant qu'ancien inspecteur, je vois régulièrement trois erreurs qui plombent la rentabilité :</p>

<ol>
  <li><strong>Le surdimensionnement</strong> — installer 10 kWc quand votre consommation justifie 5 kWc gonfle le tarif prosumer sans augmenter proportionnellement votre gain.</li>
  <li><strong>L'orientation non compensée</strong> — un installateur sérieux ajuste le nombre de panneaux et l'inclinaison à votre toiture réelle, pas à un schéma idéal.</li>
  <li><strong>L'absence de plan d'autoconsommation</strong> — sans stratégie pour consommer en journée, vous laissez filer la majorité de votre production vers le réseau à un prix dérisoire.</li>
</ol>

<p>Ces erreurs, je les ai constatées sur des centaines d'installations. Elles sont évitables à 100 %. Consultez notre page <a href="/pieges-a-eviter/">Pièges à éviter</a> pour les détails.</p>

<h2>Conclusion : oui, c'est rentable — si c'est bien fait</h2>

<p>Les panneaux solaires en 2026 ne sont pas le placement miracle qu'ils étaient en 2012 avec le système Solwatt. Mais ils restent un investissement solide, avec un retour prévisible et un gain réel sur 25 ans. La condition : un dimensionnement adapté à votre consommation réelle et une installation de qualité.</p>

<p><strong>Vous voulez savoir ce que donnerait le calcul pour votre maison ?</strong> Nous proposons un <a href="/contact/">diagnostic énergétique gratuit</a> : on analyse votre consommation, votre toiture, votre GRD, et on vous donne les chiffres réels avant toute décision. Pas d'engagement, pas de surprise.</p>
`;

// ---------------------------------------------------------------------------
// Article 2 — Tarif prosumer 2026
// ---------------------------------------------------------------------------
const bodyTarifProsumer = `
<p class="lead">Le tarif prosumer est devenu l'épouvantail du photovoltaïque wallon. Pourtant, une fois qu'on comprend ce que c'est réellement et comment il fonctionne, il perd beaucoup de son pouvoir d'intimidation. Voici une explication claire, avec les montants à jour et les stratégies concrètes pour en limiter l'impact.</p>

<h2>Le tarif prosumer, c'est quoi exactement ?</h2>

<p>Le tarif prosumer n'est <strong>pas une taxe</strong>. C'est une redevance pour l'utilisation du réseau de distribution. Quand vous injectez de l'électricité dans le réseau et que vous la prélevez plus tard, vous utilisez le réseau comme une "batterie virtuelle". Le tarif prosumer est le prix de ce service.</p>

<p>Avant son introduction, les propriétaires de panneaux solaires utilisaient le réseau gratuitement pour stocker leur surplus. Les coûts de réseau étaient alors reportés sur les ménages sans panneaux. Le tarif prosumer corrige cette inégalité — c'est un principe d'équité, pas une punition.</p>

<h2>Les deux régimes : compensation ou pas</h2>

<h3>Régime 1 : installations mises en service avant le 1er janvier 2024</h3>

<p>Si votre installation a été raccordée avant cette date, vous bénéficiez encore du mécanisme de <strong>compensation</strong> jusqu'au 31 décembre 2030. Concrètement :</p>

<ul>
  <li>Votre compteur communicant mesure les prélèvements et les injections séparément.</li>
  <li>En fin de période de facturation, les injections sont soustraites des prélèvements pour calculer votre consommation nette.</li>
  <li>Vous payez le tarif prosumer en sus, calculé sur la puissance de votre onduleur.</li>
</ul>

<p>Ce régime reste avantageux. La compensation efface une grande partie de votre facture d'électricité, et le tarif prosumer est un coût fixe prévisible.</p>

<h3>Régime 2 : installations mises en service à partir du 1er janvier 2024</h3>

<p>Plus de compensation. Chaque kWh injecté et chaque kWh prélevé sont comptés indépendamment. L'électricité injectée est valorisée au tarif d'injection de votre fournisseur (généralement entre 1 et 6 c/kWh). Le tarif prosumer s'applique également.</p>

<p>Dans ce régime, <strong>l'autoconsommation devient encore plus déterminante</strong>. Chaque kWh consommé directement vaut environ 38 c/kWh (le prix que vous n'achetez pas au réseau), contre 1 à 6 c/kWh pour un kWh injecté.</p>

<h2>Montants du tarif prosumer par GRD (2026)</h2>

<p>Le tarif prosumer est calculé par la CWaPE sur base d'une hypothèse d'autoconsommation de 37,76 %. Il varie selon votre gestionnaire de réseau :</p>

<table>
  <thead>
    <tr>
      <th>Gestionnaire de réseau (GRD)</th>
      <th>Tarif annuel (EUR/kWe/an)</th>
      <th>Coût pour 5 kWe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>ORES</td><td>85,84</td><td>429 EUR/an</td></tr>
    <tr><td>RESA</td><td>84,22</td><td>421 EUR/an</td></tr>
    <tr><td>AIEG</td><td>81,04</td><td>405 EUR/an</td></tr>
    <tr><td>AIESH</td><td>99,29</td><td>496 EUR/an</td></tr>
    <tr><td>REW</td><td>93,00</td><td>465 EUR/an</td></tr>
  </tbody>
</table>

<p>Le montant est calculé sur la <strong>puissance de l'onduleur</strong> (en kWe), pas sur la puissance crête des panneaux (kWc). C'est une distinction importante : un installateur compétent optimise ce ratio pour réduire votre facture prosumer.</p>

<h2>L'hypothèse CWaPE de 37,76 %</h2>

<p>La CWaPE part du principe que vous autoconsommez 37,76 % de votre production. Si votre taux réel est supérieur, le tarif prosumer devient proportionnellement moins pénalisant par rapport à votre gain total. C'est pourquoi toute stratégie d'optimisation de l'autoconsommation améliore directement votre rentabilité.</p>

<h2>Que se passe-t-il après le 31 décembre 2030 ?</h2>

<p>Pour les installations du régime 1 (avant 2024), le mécanisme de compensation prend fin au 31 décembre 2030. À partir de 2031, elles basculent dans le même régime que les installations post-2024 : plus de compensation, injection et prélèvement comptés séparément.</p>

<p>Ce n'est pas une catastrophe, mais c'est un changement à anticiper. Les propriétaires concernés ont intérêt à :</p>

<ul>
  <li>Augmenter leur autoconsommation dès maintenant (habitudes de consommation, programmateurs)</li>
  <li>Évaluer l'ajout d'une <a href="/services/batteries-domestiques/">batterie domestique</a> avant 2030</li>
  <li>Profiter du tarif IMPACT pour lisser leur consommation</li>
</ul>

<h2>Le tarif IMPACT : la nouvelle donne</h2>

<p>Le tarif IMPACT (Incentive Metering for Peak Adjustment and Consumption Tuning) modifie la logique de facturation du réseau. Au lieu de payer uniquement sur les kWh consommés, vous payez aussi en fonction de vos <strong>pics de prélèvement</strong> (les quarts d'heure où vous consommez le plus).</p>

<p>Pour un ménage avec panneaux solaires, c'est une opportunité : en étalant votre consommation et en évitant les pics (pas de four + sèche-linge + borne de recharge en même temps), vous réduisez cette composante de votre facture. C'est un avantage concret que les installations bien dimensionnées et bien utilisées peuvent exploiter.</p>

<h2>5 stratégies concrètes pour réduire l'impact du tarif prosumer</h2>

<ol>
  <li><strong>Déplacez vos consommations en journée</strong> — lave-linge, lave-vaisselle, chauffe-eau : programmez-les entre 10h et 15h.</li>
  <li><strong>Ne surdimensionnez pas</strong> — plus de puissance onduleur = plus de tarif prosumer. Adaptez à votre consommation réelle.</li>
  <li><strong>Optimisez le ratio panneaux/onduleur</strong> — un installateur expérimenté peut légalement installer plus de kWc de panneaux sur un onduleur de puissance inférieure (dans les limites techniques).</li>
  <li><strong>Considérez une batterie</strong> — pas toujours rentable, mais dans certains profils, elle déplace suffisamment de consommation pour compenser son coût. <a href="/blog/batterie-domestique-rentable/">Lisez notre analyse détaillée ici.</a></li>
  <li><strong>Surveillez votre contrat d'injection</strong> — les tarifs d'injection varient entre fournisseurs. Un comparatif peut faire gagner 50-100 EUR/an.</li>
</ol>

<h2>En résumé</h2>

<p>Le tarif prosumer est un coût réel mais maîtrisable. Il n'annule pas la rentabilité du photovoltaïque — il la réduit de façon prévisible et optimisable. Les installations correctement dimensionnées et bien utilisées restent un investissement solide, même en tenant compte de cette redevance.</p>

<p>En tant qu'ancien inspecteur en installation électrique, j'ai vu trop d'installations surdimensionnées vendues sur base de simulations irréalistes qui ignoraient le tarif prosumer. <a href="/pieges-a-eviter/">C'est le piège numéro un à éviter.</a> Un bon dimensionnement commence par une analyse sérieuse de votre consommation, pas par le nombre de panneaux qu'on peut poser sur votre toit.</p>

<p><strong>Vous voulez comprendre l'impact réel du tarif prosumer sur votre situation ?</strong> Notre <a href="/contact/">diagnostic énergétique gratuit</a> inclut le calcul complet avec votre GRD, votre profil de consommation et vos options d'optimisation. C'est le point de départ d'une décision éclairée.</p>
`;

// ---------------------------------------------------------------------------
// Article 3 — Batterie domestique rentable
// ---------------------------------------------------------------------------
const bodyBatterieDomestique = `
<p class="lead">La batterie domestique fait rêver. Stocker son électricité solaire, devenir autonome, ne plus dépendre du réseau. La réalité est plus nuancée. Dans certains cas, c'est un excellent investissement. Dans d'autres, c'est une dépense prématurée. Voici le calcul honnête.</p>

<p>Chez Be'energies, on ne vend pas une batterie à un client si elle n'est pas rentable pour sa situation. C'est un principe, pas un slogan. Je suis Benoît Dezso, ancien inspecteur en conformité électrique, et j'ai passé des années à constater les conséquences d'équipements mal dimensionnés ou vendus sur base d'arguments commerciaux plutôt que techniques. La batterie domestique mérite mieux que ça.</p>

<h2>Ce qu'une batterie domestique fait (et ne fait pas)</h2>

<p>Une batterie domestique stocke l'électricité produite par vos panneaux solaires pendant la journée et la restitue le soir ou la nuit, quand vous en avez besoin. Cela augmente votre <strong>taux d'autoconsommation</strong> — la part de votre production que vous utilisez directement.</p>

<p>Ce qu'elle ne fait <strong>pas</strong> :</p>
<ul>
  <li>Vous rendre autonome du réseau (sauf système hybride spécifique, beaucoup plus coûteux)</li>
  <li>Garantir une rentabilité automatique quel que soit votre profil</li>
  <li>Remplacer un bon dimensionnement de l'installation solaire elle-même</li>
</ul>

<h2>Combien ça coûte ?</h2>

<p>En 2026, une batterie domestique de qualité (lithium-ion, 5 à 10 kWh de capacité utile) coûte entre <strong>5 000 et 8 000 EUR</strong> installée, TVA 6 % incluse pour une habitation de plus de 10 ans.</p>

<p>Les marques fiables sur le marché belge incluent Huawei LUNA, BYD, SolarEdge Home Battery et Enphase. Le choix dépend de la compatibilité avec votre onduleur et de votre profil de consommation — pas du marketing du fabricant.</p>

<h2>Régime avant 2024 : la batterie est rarement prioritaire</h2>

<p>Si votre installation photovoltaïque a été mise en service avant le 1er janvier 2024, vous bénéficiez encore de la <strong>compensation</strong> (compteur qui "tourne à l'envers") jusqu'au 31 décembre 2030. Dans ce cas :</p>

<ul>
  <li>Le réseau fait déjà office de batterie virtuelle gratuite (hors tarif prosumer).</li>
  <li>L'ajout d'une batterie physique n'apporte qu'un gain marginal : réduction du tarif prosumer et optimisation du tarif IMPACT.</li>
  <li>L'économie annuelle se situe entre <strong>220 et 350 EUR</strong> — insuffisant pour justifier l'investissement à court terme.</li>
</ul>

<p>Pour ces ménages, il est souvent plus judicieux d'attendre 2029-2030 pour évaluer l'ajout d'une batterie avant la fin de la compensation. Les prix auront baissé et la technologie aura progressé.</p>

<h2>Régime après 2024 : la batterie change la donne</h2>

<p>Sans compensation, chaque kWh injecté dans le réseau ne vaut que 1 à 6 c/kWh, alors qu'il vous aurait fait économiser ~38 c/kWh si vous l'aviez consommé. La batterie corrige exactement ce déséquilibre :</p>

<ul>
  <li>Elle capte le surplus de production en journée.</li>
  <li>Elle le restitue pendant les heures où vous consommez sans produire (soir, nuit, matin).</li>
  <li>Chaque kWh "déplacé" représente un gain de 32 à 37 centimes (prix évité moins coût d'injection perdu).</li>
</ul>

<h3>Estimation des économies annuelles</h3>
<ul>
  <li>Batterie 5 kWh, ménage standard : <strong>350 - 450 EUR/an</strong></li>
  <li>Batterie 10 kWh, ménage à consommation élevée : <strong>450 - 600 EUR/an</strong></li>
  <li>Avec véhicule électrique chargé en soirée : <strong>500 - 700 EUR/an</strong></li>
</ul>

<h3>Retour sur investissement</h3>
<ul>
  <li>Scénario standard (5 kWh, 400 EUR/an d'économie) : <strong>retour en 13-15 ans</strong></li>
  <li>Scénario optimisé (10 kWh, profil favorable) : <strong>retour en 10-12 ans</strong></li>
  <li>Avec synergie véhicule électrique : <strong>retour en 9-11 ans</strong></li>
</ul>

<p>Les batteries actuelles offrent des garanties de 10 à 15 ans. Le retour sur investissement se situe donc à la limite de la durée de garantie. Ce n'est pas un placement spectaculaire — c'est un investissement qui se justifie dans le bon contexte.</p>

<h2>L'avantage tarif IMPACT</h2>

<p>Le tarif IMPACT pénalise les pics de consommation (les quarts d'heure où vous prélevez le plus sur le réseau). Une batterie bien gérée <strong>écrête ces pics</strong> en fournissant de l'électricité stockée pendant les moments de forte demande. Ce gain sur la composante réseau est souvent sous-estimé dans les calculs simplifiés, mais il peut représenter 50 à 100 EUR supplémentaires par an.</p>

<h2>Quand la batterie est un bon choix</h2>

<ul>
  <li>Installation post-2024 (pas de compensation)</li>
  <li>Consommation élevée en soirée et la nuit (famille, télétravail partiel, véhicule électrique)</li>
  <li>Installation solaire déjà optimisée et correctement dimensionnée</li>
  <li>Volonté de maximiser l'indépendance énergétique</li>
  <li>Projet de véhicule électrique à moyen terme</li>
</ul>

<h2>Quand la batterie n'est PAS un bon choix</h2>

<ul>
  <li>Installation pré-2024 avec compensation active — attendez 2029-2030</li>
  <li>Faible consommation globale (moins de 3 000 kWh/an)</li>
  <li>Installation solaire surdimensionnée ou mal orientée (corrigez d'abord le problème de base)</li>
  <li>Budget serré ou endettement — les panneaux seuls restent prioritaires</li>
  <li>Argumentation du vendeur basée sur "l'autonomie" sans chiffres concrets</li>
</ul>

<h2>Les règles de dimensionnement</h2>

<p>Un bon dimensionnement de batterie suit deux principes :</p>

<ol>
  <li><strong>Capacité adaptée au surplus réel</strong> — une batterie de 10 kWh est inutile si votre surplus quotidien moyen est de 4 kWh. Vous payez pour de la capacité que vous n'utilisez jamais.</li>
  <li><strong>Capacité adaptée à la consommation nocturne</strong> — si vous consommez 5 kWh entre 18h et 8h, une batterie de 5 kWh suffit. Plus grand ne fait que ralentir le retour sur investissement.</li>
</ol>

<p>C'est du bon sens technique, mais j'ai inspecté des dizaines d'installations où une batterie de 10 kWh avait été vendue à un ménage qui en aurait eu assez avec 5 kWh. Le résultat : un surcoût de 2 000 à 3 000 EUR pour zéro bénéfice supplémentaire. Ce genre d'erreur, <a href="/pieges-a-eviter/">c'est exactement ce qu'on vous aide à éviter</a>.</p>

<h2>La synergie batterie + véhicule électrique</h2>

<p>Si vous possédez ou prévoyez un véhicule électrique, la batterie domestique prend une dimension supplémentaire. Vous pouvez :</p>

<ul>
  <li>Stocker la production solaire en journée</li>
  <li>Recharger le véhicule le soir via la batterie, à coût quasi nul</li>
  <li>Lisser vos pics de consommation (la borne de recharge est l'un des plus gros postes de pointe)</li>
</ul>

<p>Dans ce scénario, l'économie annuelle combinée peut dépasser 700 EUR, ce qui raccourcit significativement le retour sur investissement. <a href="/services/panneaux-photovoltaiques/">Combinée à une installation photovoltaïque bien dimensionnée</a>, la batterie devient alors un maillon logique du système.</p>

<h2>Notre approche</h2>

<p>Quand un client nous demande une batterie, on commence par analyser ses données de consommation réelles — pas par sortir un catalogue. Si les chiffres montrent que la batterie n'est pas rentable dans sa situation, on le dit clairement. On préfère un client satisfait qui revient dans trois ans quand sa situation aura changé, plutôt qu'un client qui découvre au bout de deux ans qu'il a surpayé un équipement inutile.</p>

<p><strong>Vous hésitez sur l'ajout d'une batterie ?</strong> Notre <a href="/contact/">diagnostic énergétique gratuit</a> inclut l'analyse complète : votre profil de consommation, votre régime tarifaire, votre surplus solaire réel, et une recommandation chiffrée. Pas de pression, pas de vente forcée — juste les chiffres.</p>
`;

// ---------------------------------------------------------------------------
// Article 4 — Prix panneaux solaires Belgique 2026
// ---------------------------------------------------------------------------
const bodyPrixPanneaux = `
<p class="lead">Le prix d'une installation solaire en Belgique est probablement la première chose que vous cherchez. Et c'est normal. Mais en tant qu'ancien inspecteur en conformité électrique, je dois vous prévenir : le prix affiché ne raconte jamais toute l'histoire. Ce qui compte, c'est ce que vous obtenez pour ce prix — et surtout ce qui manque dans les devis les moins chers.</p>

<h2>Ce qui détermine le prix d'une installation solaire</h2>

<p>Le coût d'une installation photovoltaïque ne se résume pas à "X panneaux x prix unitaire". Plusieurs facteurs techniques influencent directement le prix final :</p>

<ul>
  <li><strong>La qualité des panneaux</strong> — les panneaux Tier 1 (Longi, Trina, JA Solar, etc.) offrent des garanties de performance linéaire sur 25-30 ans. Les panneaux budget dégradent plus vite, produisent moins par m2 et tombent en panne plus tôt.</li>
  <li><strong>Le choix de l'onduleur</strong> — c'est le coeur du système. Un onduleur fiable (SMA, Fronius, Huawei, Enphase) dure 12-15 ans minimum. Un onduleur premier prix peut lâcher après 5 ans. Remplacement : 1 500 à 2 500 EUR.</li>
  <li><strong>Le système de montage</strong> — la structure qui fixe les panneaux à votre toiture doit résister aux vents et aux charges. Un système certifié coûte plus cher qu'un bricolage, mais il ne s'envole pas lors d'une tempête.</li>
  <li><strong>La complexité de la toiture</strong> — toiture plate, toiture en ardoise, présence de velux, cheminée, orientation multiple : chaque contrainte ajoute du temps de main-d'oeuvre et du matériel spécifique.</li>
  <li><strong>La mise à niveau du tableau électrique</strong> — si votre tableau n'est pas aux normes RGIE actuelles, il faudra le remplacer ou l'adapter. Comptez 500 à 1 500 EUR supplémentaires.</li>
  <li><strong>La qualité de la main-d'oeuvre</strong> — une équipe formée, assurée et expérimentée coûte plus cher qu'un sous-traitant itinérant. Mais elle pose correctement, connecte proprement et laisse une installation qui passe le contrôle de conformité du premier coup.</li>
</ul>

<h2>Fourchettes de prix en 2026 par taille d'installation</h2>

<p>Voici les prix constatés en Belgique pour des installations clé en main de qualité, TVA 6 % incluse (habitations de plus de 10 ans) :</p>

<table>
  <thead>
    <tr>
      <th>Puissance</th>
      <th>Nombre de panneaux (indicatif)</th>
      <th>Prix installé TTC (TVA 6 %)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>3 kWc</td><td>6 à 8</td><td>5 000 - 6 500 EUR</td></tr>
    <tr><td>4 à 5 kWc</td><td>9 à 12</td><td>6 500 - 9 000 EUR</td></tr>
    <tr><td>6 à 8 kWc</td><td>13 à 18</td><td>9 000 - 13 000 EUR</td></tr>
    <tr><td>10+ kWc</td><td>22+</td><td>13 000 - 20 000 EUR</td></tr>
  </tbody>
</table>

<p><strong>TVA 6 % ou 21 % ?</strong> La TVA réduite à 6 % s'applique aux habitations de plus de 10 ans, avec installation réalisée par un professionnel agréé. Pour les constructions neuves ou les habitations de moins de 10 ans, c'est 21 %. Cette différence représente facilement 1 000 à 2 000 EUR sur une installation standard. Vérifiez votre éligibilité avant de comparer les devis.</p>

<h2>Ce qui est inclus dans un devis sérieux (et ce qui ne l'est pas)</h2>

<p>Un installateur professionnel inclut dans son devis :</p>

<ul>
  <li>La visite technique préalable à domicile (analyse de la toiture, du tableau, de l'orientation)</li>
  <li>L'étude de dimensionnement basée sur votre consommation réelle</li>
  <li>Tous les composants : panneaux, onduleur, système de montage, câblage, protections électriques</li>
  <li>L'installation complète par une équipe qualifiée</li>
  <li>Le raccordement électrique au tableau</li>
  <li>Le contrôle de conformité RGIE</li>
  <li>Les démarches administratives auprès du GRD (déclaration de l'installation)</li>
</ul>

<p><strong>Les signaux d'alerte dans un devis :</strong></p>

<ul>
  <li>Pas de visite technique avant le devis — c'est impossible de dimensionner correctement sans voir la toiture et le tableau électrique.</li>
  <li>Prix annoncé "par panneau" sans vision système — un panneau seul ne produit rien. Ce qui compte, c'est le système complet installé.</li>
  <li>Frais supplémentaires pour l'échafaudage, la mise aux normes du tableau ou le contrôle de conformité — ces éléments font partie d'une installation sérieuse.</li>
  <li>Aucune mention de la marque des panneaux ou de l'onduleur — si le devis ne précise pas le matériel, c'est qu'il y a une raison.</li>
</ul>

<h2>Pourquoi le devis le moins cher est souvent le plus coûteux</h2>

<p>En tant qu'ancien inspecteur agréé, j'ai vu des centaines d'installations. Et la corrélation entre prix bas et problèmes est frappante :</p>

<ul>
  <li><strong>Panneaux budget</strong> — dégradation accélérée, perte de rendement de 1,5 à 2 % par an au lieu de 0,5 %. Sur 20 ans, vous perdez 20 à 30 % de production par rapport à un panneau Tier 1.</li>
  <li><strong>Onduleurs premier prix</strong> — panne après 4-6 ans, remplacement à vos frais (1 500 - 2 500 EUR), parfois indisponibilité des pièces car le fabricant a disparu.</li>
  <li><strong>Installation non conforme</strong> — contrôle RGIE raté, remédiation obligatoire (500 à 3 000 EUR), délais supplémentaires, et votre assurance habitation qui pourrait contester une couverture en cas de sinistre.</li>
  <li><strong>Sous-traitance en cascade</strong> — le commercial qui vous a vendu l'installation n'est pas celui qui l'installe. En cas de problème, personne ne répond.</li>
</ul>

<p>J'ai personnellement constaté des installations où le coût de remédiation dépassait la différence de prix entre le devis bon marché et le devis sérieux. Consultez notre page <a href="/pieges-a-eviter/">Pièges à éviter</a> pour des exemples concrets.</p>

<h2>Comment comparer les devis honnêtement</h2>

<p>La seule façon fiable de comparer des devis solaires est de raisonner en <strong>EUR par kWc installé</strong>, pas en prix total. Un devis à 8 000 EUR pour 5 kWc (1 600 EUR/kWc) est meilleur qu'un devis à 7 000 EUR pour 3,5 kWc (2 000 EUR/kWc).</p>

<p>Voici ce que vous devez vérifier dans chaque devis :</p>

<ol>
  <li><strong>Marque et modèle des panneaux</strong> — vérifiez qu'ils figurent sur la liste Tier 1 de Bloomberg.</li>
  <li><strong>Marque et modèle de l'onduleur</strong> — et la durée de garantie (10 ans minimum, 15-20 ans en option chez les bons fabricants).</li>
  <li><strong>Garantie de performance linéaire</strong> — les panneaux sérieux garantissent au moins 84 % de rendement à 25 ans.</li>
  <li><strong>Conformité RGIE incluse</strong> — pas en option, pas en supplément.</li>
  <li><strong>Ce qui est exclu</strong> — lisez les petites lignes. Si l'échafaudage, la mise aux normes ou les démarches GRD sont en supplément, ajoutez-les au prix total avant de comparer.</li>
  <li><strong>Méthodologie de simulation</strong> — demandez comment le rendement annoncé a été calculé. Quel logiciel ? Quelles hypothèses d'autoconsommation ? Si personne ne peut répondre, c'est un chiffre en l'air.</li>
</ol>

<p>La transparence sur ces points distingue un installateur sérieux d'un commercial. <a href="/blog/panneaux-solaires-rentables-2026/">Notre analyse complète de la rentabilité en 2026</a> vous donne les chiffres de référence pour évaluer n'importe quelle proposition.</p>

<p><strong>Vous voulez un devis basé sur votre situation réelle, pas sur un template ?</strong> Notre <a href="/contact/">diagnostic énergétique gratuit</a> commence par une visite technique, une analyse de votre consommation et un dimensionnement sur mesure. Vous recevez un devis détaillé avec tous les composants, toutes les garanties et zéro frais cachés. <a href="/services/panneaux-photovoltaiques/">En savoir plus sur nos installations photovoltaïques.</a></p>
`;

// ---------------------------------------------------------------------------
// Article 5 — Borne de recharge à domicile
// ---------------------------------------------------------------------------
const bodyBorneRecharge = `
<p class="lead">L'adoption du véhicule électrique accélère en Belgique. En 2026, plus de 25 % des nouvelles immatriculations sont électriques ou hybrides rechargeables. Et la première question pratique qui se pose : comment recharger chez soi, en sécurité, sans faire sauter le compteur ? Ce guide couvre tout ce qu'il faut savoir — y compris ce que beaucoup d'installateurs ne vous diront pas.</p>

<h2>Pourquoi une borne dédiée (et pas une simple prise)</h2>

<p>Techniquement, vous pouvez recharger un véhicule électrique sur une prise domestique standard. En pratique, c'est une mauvaise idée pour trois raisons :</p>

<ul>
  <li><strong>Sécurité</strong> — une prise classique n'est pas conçue pour délivrer 10 ampères en continu pendant 8 à 12 heures. Surchauffe, risque d'incendie, dégradation du câblage dans le mur : j'ai inspecté des installations où la gaine avait fondu dans la paroi. Le propriétaire ne s'en rendait même pas compte.</li>
  <li><strong>Vitesse de charge</strong> — une prise standard délivre environ 2,3 kW (10 A). Pour une batterie de 60 kWh, comptez plus de 26 heures de charge complète. Une borne 7,4 kW ramène ce temps à 8 heures. Une borne triphasé 11 kW : environ 5 heures.</li>
  <li><strong>Fonctionnalités intelligentes</strong> — programmation horaire (recharger pendant les heures creuses ou pendant la production solaire), suivi de consommation, synchronisation avec vos panneaux photovoltaïques, pilotage à distance. Impossible avec une prise murale.</li>
</ul>

<p>En tant qu'ancien inspecteur en conformité électrique, je suis catégorique : une borne dédiée avec un circuit dédié est le seul choix responsable. Le RGIE l'impose d'ailleurs pour toute installation fixe de recharge.</p>

<h2>Monophasé ou triphasé : comment choisir</h2>

<p>La majorité des habitations belges sont raccordées en <strong>monophasé</strong>. Cela signifie :</p>

<ul>
  <li><strong>Monophasé 230 V</strong> — puissance de charge maximale : 7,4 kW (32 A). C'est suffisant pour recharger la plupart des véhicules électriques en une nuit. Pour un usage quotidien de 30 à 50 km, 3 à 4 heures de charge suffisent.</li>
  <li><strong>Triphasé 400 V</strong> — puissance de charge : 11 kW (16 A par phase) ou 22 kW (32 A par phase). Nécessaire uniquement si vous avez des besoins de recharge rapide ou si vous rechargez plusieurs véhicules.</li>
</ul>

<p>Le passage en triphasé n'est pas toujours simple. Il faut :</p>

<ul>
  <li>Vérifier la disponibilité auprès de votre GRD (ORES, Sibelga, Fluvius selon la région)</li>
  <li>Adapter le tableau électrique</li>
  <li>Budget supplémentaire : 800 à 2 500 EUR selon les travaux nécessaires</li>
</ul>

<p><strong>À Bruxelles</strong>, le passage en triphasé via Sibelga peut être plus contraint (disponibilité, délais, coûts). Renseignez-vous avant d'acheter une borne triphasé.</p>

<p><strong>Règle pratique</strong> : si vous rechargez la nuit et que votre trajet quotidien est inférieur à 80 km, une borne monophasé 7,4 kW couvre largement vos besoins. Inutile de surdimensionner.</p>

<h2>Ce que comprend une installation correcte</h2>

<p>Une installation de borne de recharge conforme et durable comprend :</p>

<ul>
  <li><strong>Un circuit dédié</strong> depuis le tableau électrique — câble de section appropriée (6 mm2 minimum pour 32 A), protégé par un disjoncteur dédié.</li>
  <li><strong>Un différentiel adapté</strong> — type A minimum (détecte les courants de fuite continus générés par les chargeurs embarqués). Certaines bornes exigent un type B, plus coûteux mais indispensable pour la sécurité.</li>
  <li><strong>La conformité RGIE</strong> — l'installation doit être déclarée et conforme. Un contrôle de conformité est obligatoire si vous modifiez votre installation électrique.</li>
  <li><strong>La déclaration au GRD</strong> — votre gestionnaire de réseau doit être informé de l'installation d'une borne, surtout si elle dépasse 5 kW.</li>
</ul>

<p><strong>Fourchette de prix</strong> : comptez entre <strong>1 500 et 3 000 EUR</strong> tout compris (borne + installation + conformité). Ce prix varie selon la distance entre le tableau et l'emplacement de la borne, la nécessité ou non d'un différentiel type B et la complexité du cheminement du câble.</p>

<p>Options avancées disponibles :</p>
<ul>
  <li><strong>Charge solaire intelligente</strong> — la borne ajuste sa puissance en fonction de la production de vos panneaux. Vous rechargez avec votre propre électricité au lieu de la revendre à perte au réseau.</li>
  <li><strong>Gestion de charge dynamique (load balancing)</strong> — la borne réduit automatiquement sa puissance quand d'autres gros consommateurs fonctionnent (four, sèche-linge), pour éviter de dépasser la capacité de votre compteur.</li>
</ul>

<h2>Le piège de la conformité</h2>

<p>C'est le point que la plupart des clients ignorent — et que beaucoup d'électriciens n'abordent pas :</p>

<p>Installer une borne de recharge modifie votre installation électrique. En Belgique, toute modification significative de l'installation électrique doit faire l'objet d'un <strong>contrôle de conformité RGIE</strong>. Si ce contrôle n'est pas réalisé :</p>

<ul>
  <li>Votre installation n'est pas légalement conforme.</li>
  <li>En cas d'incendie ou de sinistre, votre assurance habitation peut refuser la couverture.</li>
  <li>En cas de revente, l'acquéreur demandera un contrôle — et les non-conformités apparaîtront.</li>
</ul>

<p>J'ai été inspecteur agréé pendant des années. Le nombre d'installations de bornes réalisées sans contrôle de conformité est alarmant. Chez Be'energies, chaque installation de borne inclut systématiquement la mise en conformité et le contrôle. C'est non négociable. <a href="/services/conformite-electrique/">En savoir plus sur la conformité électrique.</a></p>

<h2>Marques que nous recommandons</h2>

<p>Nous ne sommes pas liés à un seul fabricant. Nous choisissons la borne adaptée à la situation du client :</p>

<ul>
  <li><strong>Alfen Eve Single Pro-Line</strong> — robuste, connectée, compatible avec la plupart des systèmes de gestion d'énergie. Excellente pour les maisons avec panneaux solaires.</li>
  <li><strong>Wallbox Pulsar Plus</strong> — compacte, abordable, application intuitive. Bon rapport qualité-prix en monophasé.</li>
  <li><strong>Easee Home</strong> — design épuré, load balancing intégré, installation rapide. Populaire en Scandinavie, fiabilité prouvée.</li>
  <li><strong>Huawei Smart Charger</strong> — intégrée nativement avec les onduleurs et batteries Huawei. Choix logique si vous avez déjà un écosystème Huawei sur votre installation solaire.</li>
</ul>

<p>Le choix dépend de votre configuration électrique, de votre véhicule et de vos besoins en fonctionnalités intelligentes — pas du marketing. <a href="/pieges-a-eviter/">Consultez nos conseils pour éviter les mauvais choix.</a></p>

<p><strong>Vous envisagez l'installation d'une borne de recharge ?</strong> Notre <a href="/contact/">diagnostic gratuit</a> inclut l'analyse de votre tableau électrique, la vérification de la faisabilité (monophasé ou triphasé), et une recommandation de borne adaptée à votre véhicule et à votre installation existante. Rien n'est laissé au hasard. <a href="/services/bornes-de-recharge/">Découvrez notre service bornes de recharge.</a></p>
`;

// ---------------------------------------------------------------------------
// Article 6 — Pompe à chaleur vs chaudière gaz
// ---------------------------------------------------------------------------
const bodyPompeAChaleur = `
<p class="lead">Faut-il remplacer sa chaudière gaz par une pompe à chaleur ? La question divise les propriétaires belges. Les partisans de la pompe à chaleur promettent des économies spectaculaires. Les sceptiques rappellent l'investissement élevé et les limites en hiver. La vérité, comme souvent, dépend de votre situation. Voici le comparatif honnête, sans parti pris.</p>

<h2>Comment fonctionne une pompe à chaleur (en 30 secondes)</h2>

<p>Le modèle le plus courant en Belgique est la pompe à chaleur <strong>air-eau</strong>. Son principe :</p>

<ul>
  <li>Elle capte les calories présentes dans l'air extérieur (même par températures négatives).</li>
  <li>Elle les concentre via un cycle thermodynamique (compresseur).</li>
  <li>Elle les transfère à l'eau de votre circuit de chauffage.</li>
</ul>

<p>L'indicateur clé est le <strong>COP (Coefficient of Performance)</strong>. Un COP de 3,5 signifie : pour 1 kWh d'électricité consommée, la pompe à chaleur produit 3,5 kWh de chaleur. C'est ce qui la rend économique malgré le prix élevé de l'électricité.</p>

<p><strong>Ce que la pompe à chaleur n'est pas</strong> : une solution miracle. Son rendement baisse quand la température extérieure descend sous -5 à -7 degrés C. Elle nécessite un dimensionnement précis. Et elle n'est pas adaptée à tous les types de bâtiments.</p>

<h2>Le vrai comparatif de coût</h2>

<h3>Investissement initial</h3>

<table>
  <thead>
    <tr>
      <th>Solution</th>
      <th>Coût installé</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Remplacement chaudière gaz à condensation</td><td>3 000 - 5 000 EUR</td></tr>
    <tr><td>Pompe à chaleur air-eau (chauffage seul)</td><td>10 000 - 14 000 EUR</td></tr>
    <tr><td>Pompe à chaleur air-eau (chauffage + ECS)</td><td>12 000 - 16 000 EUR</td></tr>
  </tbody>
</table>

<p>L'écart d'investissement est significatif : 7 000 à 11 000 EUR de différence. C'est le premier frein pour la majorité des ménages. Mais ce n'est qu'une partie du calcul.</p>

<h3>Coûts de fonctionnement annuels</h3>

<p>Pour un besoin de chauffage de 20 000 kWh par an (maison moyenne en Belgique) :</p>

<table>
  <thead>
    <tr>
      <th>Poste</th>
      <th>Chaudière gaz</th>
      <th>Pompe à chaleur (COP 3,5)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Énergie nécessaire</td><td>20 000 kWh gaz</td><td>5 700 kWh électricité</td></tr>
    <tr><td>Prix unitaire</td><td>~0,08 EUR/kWh</td><td>~0,38 EUR/kWh</td></tr>
    <tr><td>Coût énergétique annuel</td><td>~1 600 EUR</td><td>~2 170 EUR</td></tr>
    <tr><td>Coût effectif par kWh de chaleur</td><td>~0,08 EUR</td><td>~0,11 EUR</td></tr>
    <tr><td>Entretien annuel</td><td>150 - 250 EUR</td><td>100 - 200 EUR</td></tr>
    <tr><td><strong>Total annuel</strong></td><td><strong>~1 800 EUR</strong></td><td><strong>~1 300 EUR</strong></td></tr>
  </tbody>
</table>

<p><strong>Attention</strong> : le coût annuel de la pompe à chaleur dans ce tableau suppose un COP moyen réel de 3,5 sur l'année. Si la maison est mal isolée ou si les émetteurs de chaleur sont inadéquats, le COP réel peut descendre à 2,5 — et l'économie disparaît presque entièrement.</p>

<h3>Retour sur investissement</h3>

<p>Avec une économie annuelle de ~500 EUR et un surinvestissement de 8 000 à 10 000 EUR, le retour se situe entre <strong>8 et 12 ans</strong> hors primes. Les primes régionales (Wallonie, Bruxelles, Flandre) peuvent réduire ce délai de 2 à 4 ans selon votre situation et les montants en vigueur.</p>

<p>L'évolution du prix du gaz est le facteur décisif à long terme. Si le gaz augmente de 5 % par an (tendance probable avec la taxation carbone croissante), le retour s'accélère. Si le gaz reste stable, le retour est plus lent mais reste positif sur la durée de vie de l'appareil (15-20 ans).</p>

<h2>Quand la pompe à chaleur est le bon choix</h2>

<ul>
  <li><strong>Maison bien isolée</strong> (ou rénovation énergétique prévue) — la pompe à chaleur fonctionne avec de l'eau à basse température (35-45 degrés C). Un bâtiment performant permet d'exploiter pleinement ce régime.</li>
  <li><strong>Chauffage par le sol</strong> — c'est le couple idéal. Le plancher chauffant fonctionne à 30-35 degrés C, exactement dans la plage optimale de la PAC.</li>
  <li><strong>Grands radiateurs basse température</strong> — les radiateurs surdimensionnés d'origine peuvent fonctionner en basse température. À vérifier au cas par cas.</li>
  <li><strong>Combinaison avec panneaux solaires</strong> — l'électricité produite par vos panneaux alimente directement la pompe à chaleur. Le coût de fonctionnement chute drastiquement. <a href="/services/panneaux-photovoltaiques/">En savoir plus sur la synergie PV + PAC.</a></li>
  <li><strong>Construction neuve ou rénovation lourde</strong> — c'est le moment idéal pour intégrer une PAC dans le système global.</li>
</ul>

<h2>Quand la pompe à chaleur n'est PAS le bon choix</h2>

<ul>
  <li><strong>Maison mal isolée sans projet de rénovation</strong> — la PAC devra produire de l'eau à haute température (60-70 degrés C) pour compenser les déperditions. Le COP chute à 2 voire moins. Vous consommez presque autant qu'avec une résistance électrique.</li>
  <li><strong>Petits radiateurs haute température</strong> — les anciens radiateurs dimensionnés pour fonctionner à 70-80 degrés C ne sont pas compatibles avec une PAC sans remplacement. Le coût de remplacement des émetteurs s'ajoute au budget.</li>
  <li><strong>Budget contraint sans accès aux primes</strong> — si l'investissement initial met le ménage en difficulté financière, une chaudière gaz à condensation neuve reste un choix rationnel à court terme.</li>
  <li><strong>Très petite habitation</strong> — en dessous de 10 000 kWh de besoin de chauffage annuel, l'économie absolue est trop faible pour justifier l'écart d'investissement dans un délai raisonnable.</li>
</ul>

<h2>Le piège du dimensionnement</h2>

<p>C'est le point critique que la plupart des vendeurs survolent — et celui qui fait la différence entre une installation performante et un gouffre financier.</p>

<ul>
  <li><strong>PAC surdimensionnée</strong> — elle cycle trop fréquemment (s'allume et s'éteint en boucle). Conséquences : usure prématurée du compresseur, surconsommation, bruit, inconfort. J'ai inspecté des maisons où la PAC de 14 kW avait été installée dans une maison qui en demandait 8 kW. Le propriétaire se plaignait de bruit, de factures élevées et de pannes répétées.</li>
  <li><strong>PAC sous-dimensionnée</strong> — elle ne couvre pas les besoins par temps froid. La résistance électrique d'appoint prend le relais — à 0,38 EUR/kWh sans COP. Les factures hivernales explosent. Le propriétaire conclut que "la pompe à chaleur, ça ne marche pas".</li>
</ul>

<p>Un dimensionnement correct exige un <strong>calcul de déperditions thermiques</strong> (norme NBN EN 12831), pas une estimation au doigt mouillé basée sur la surface. Ce calcul tient compte de l'isolation, des fenêtres, de l'exposition, du volume et de la température de design. <a href="/pieges-a-eviter/">C'est l'un des pièges les plus coûteux à éviter.</a></p>

<h2>La synergie PV + pompe à chaleur</h2>

<p>Combiner panneaux photovoltaïques et pompe à chaleur est l'une des stratégies énergétiques les plus efficaces pour un ménage belge :</p>

<ul>
  <li><strong>En hiver</strong> — la PAC consomme de l'électricité que vos panneaux produisent en partie, même avec un ensoleillement réduit. Chaque kWh autoconsommé vaut 0,38 EUR économisé.</li>
  <li><strong>En été</strong> — la PAC réversible fournit la climatisation. Avec une production solaire maximale, le refroidissement est quasiment gratuit.</li>
  <li><strong>Sur l'année</strong> — la PAC consomme de l'électricité toute l'année (chauffage + ECS), ce qui augmente votre taux d'autoconsommation solaire et améliore la rentabilité globale de l'installation PV.</li>
</ul>

<p>Dans un scénario PV + PAC bien dimensionné, le coût de chauffage annuel peut descendre sous <strong>600 EUR</strong>, contre 1 600 EUR au gaz. C'est ce type de synergie qui transforme l'équation financière. <a href="/services/panneaux-photovoltaiques/">Découvrez nos installations photovoltaïques.</a></p>

<p><strong>Vous hésitez entre pompe à chaleur et chaudière gaz ?</strong> La réponse dépend de votre bâtiment, de votre système de chauffage actuel et de votre projet de rénovation. Notre <a href="/contact/">diagnostic énergétique gratuit</a> inclut l'analyse de votre situation et une recommandation chiffrée — pas un argumentaire de vente. <a href="/services/pompes-a-chaleur/">En savoir plus sur nos installations de pompes à chaleur.</a></p>
`;

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export const blogArticles: BlogArticle[] = [
  {
    slug: "prix-panneaux-solaires-belgique-2026",
    title: "Prix des panneaux solaires en Belgique en 2026 : guide complet",
    excerpt:
      "De 5 000 à 20 000 EUR selon la taille : ce qui détermine le prix, ce qu'un devis sérieux doit inclure, et pourquoi le moins cher coûte souvent plus.",
    date: "2026-03-05",
    author: "Benoît Dezso",
    readingTime: 7,
    tags: ["photovoltaïque", "prix", "belgique"],
    relatedServices: ["panneaux-photovoltaiques", "batteries-domestiques"],
    body: bodyPrixPanneaux,
  },
  {
    slug: "panneaux-solaires-rentables-2026",
    title: "Les panneaux solaires sont-ils encore rentables en 2026 ?",
    excerpt:
      "Tarif prosumer, tarifs d\u2019injection, autoconsommation : un ancien inspecteur vous donne les vrais chiffres.",
    date: "2026-03-01",
    author: "Benoît Dezso",
    readingTime: 8,
    tags: ["photovoltaïque", "rentabilité", "tarif-prosumer"],
    relatedServices: ["panneaux-photovoltaiques", "batteries-domestiques"],
    body: bodyPanneauxRentables,
  },
  {
    slug: "borne-recharge-domicile-guide",
    title: "Installer une borne de recharge chez soi : le guide complet",
    excerpt:
      "Monophasé ou triphasé, conformité RGIE, prix, marques : tout ce qu'il faut savoir avant d'installer une borne de recharge à domicile.",
    date: "2026-02-28",
    author: "Benoît Dezso",
    readingTime: 8,
    tags: ["borne-recharge", "véhicule-électrique", "guide"],
    relatedServices: ["bornes-de-recharge", "conformite-electrique"],
    body: bodyBorneRecharge,
  },
  {
    slug: "tarif-prosumer-2026",
    title:
      "Tarif prosumer 2026 en Wallonie : ce qui change et ce que ça coûte",
    excerpt:
      "Les montants par GRD, les deux régimes (avant/après 2024), et comment optimiser votre installation.",
    date: "2026-02-15",
    author: "Benoît Dezso",
    readingTime: 6,
    tags: ["tarif-prosumer", "wallonie", "réglementation"],
    relatedServices: ["panneaux-photovoltaiques"],
    body: bodyTarifProsumer,
  },
  {
    slug: "pompe-chaleur-vs-chaudiere-gaz",
    title: "Pompe à chaleur ou chaudière gaz : le comparatif honnête",
    excerpt:
      "Investissement, coûts de fonctionnement, conditions idéales : le comparatif sans parti pris pour faire le bon choix de chauffage.",
    date: "2026-02-10",
    author: "Benoît Dezso",
    readingTime: 8,
    tags: ["pompe-à-chaleur", "chauffage", "comparatif"],
    relatedServices: ["pompes-a-chaleur", "panneaux-photovoltaiques"],
    body: bodyPompeAChaleur,
  },
  {
    slug: "batterie-domestique-rentable",
    title: "Une batterie domestique est-elle rentable ? Le calcul honnête",
    excerpt:
      "On ne vous vend pas une batterie si elle n\u2019est pas rentable. Voici comment on calcule.",
    date: "2026-01-20",
    author: "Benoît Dezso",
    readingTime: 7,
    tags: ["batterie", "rentabilité", "autoconsommation"],
    relatedServices: ["batteries-domestiques", "panneaux-photovoltaiques"],
    body: bodyBatterieDomestique,
  },
];

export function getBlogArticleBySlug(
  slug: string
): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
