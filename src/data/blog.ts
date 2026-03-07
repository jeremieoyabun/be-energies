import type { BlogArticle } from "@/lib/types";

// ---------------------------------------------------------------------------
// Article 1 — Rentabilite panneaux solaires 2026
// ---------------------------------------------------------------------------
const bodyPanneauxRentables = `
<p class="lead">En 2026, la question revient sans cesse : "Est-ce que ca vaut encore la peine d'installer des panneaux solaires en Wallonie ?" La reponse courte : oui, et le retour sur investissement reste parmi les meilleurs placements accessibles a un menage belge. Mais il faut comprendre les vrais chiffres, pas ceux des publicites Facebook.</p>

<p>Je suis Benoit Dezso, ancien inspecteur agree en conformite electrique. Pendant des annees, j'ai inspecte des installations solaires — les bonnes et les mauvaises. Ce que j'ai appris, c'est que la rentabilite depend moins du prix des panneaux que de la qualite du dimensionnement, du taux d'autoconsommation et de la comprehension du cadre tarifaire. Voici le calcul reel, sans embellissement.</p>

<h2>Ce qui a change depuis 2020</h2>

<p>Deux changements majeurs ont seme le doute chez les proprietaires wallons :</p>

<ul>
  <li><strong>Le tarif prosumer</strong> — une redevance annuelle pour l'utilisation du reseau, appliquee a tous les producteurs d'electricite decentralisee.</li>
  <li><strong>Le compteur communicant (smart meter)</strong> — qui mesure desormais les prelevements et les injections separement, au lieu de laisser le compteur "tourner a l'envers".</li>
</ul>

<p>Beaucoup de proprietaires en concluent que "les panneaux ne sont plus rentables". C'est une conclusion fausse basee sur une comparaison avec un systeme qui n'existe plus. La bonne question est : <strong>quel est le retour reel aujourd'hui, en tenant compte de ces couts ?</strong></p>

<h2>Les deux regimes : avant et apres le 1er janvier 2024</h2>

<p>La date de mise en service de votre installation determine votre regime tarifaire :</p>

<ul>
  <li><strong>Avant le 1er janvier 2024</strong> : vous beneficiez de la compensation (compteur qui "tourne a l'envers") jusqu'au 31 decembre 2030. Le tarif prosumer s'applique neanmoins.</li>
  <li><strong>A partir du 1er janvier 2024</strong> : pas de compensation. L'electricite injectee est comptabilisee separement et valorisee au tarif d'injection de votre fournisseur (entre 1 et 6 c/kWh selon le contrat).</li>
</ul>

<p>Dans les deux cas, <strong>l'autoconsommation reste le levier de rentabilite principal</strong>. Chaque kWh que vous consommez directement vaut environ 38 c/kWh (prix evite sur votre facture), alors qu'un kWh injecte ne vous rapporte que 1 a 6 centimes.</p>

<h2>Combien coute le tarif prosumer par GRD ?</h2>

<p>Le montant du tarif prosumer depend de votre gestionnaire de reseau de distribution (GRD). Voici les montants annuels par kWe de puissance onduleur :</p>

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

<p>Pour une installation de 4,7 kWc avec un onduleur de puissance equivalente en zone ORES, cela represente environ <strong>403 EUR par an</strong>. C'est un cout reel, mais il ne fait pas disparaitre la rentabilite — il la reduit.</p>

<h2>Le calcul concret : installation de 4,7 kWc en 2026</h2>

<h3>Hypotheses</h3>
<ul>
  <li>Installation 4,7 kWc, orientation sud, inclinaison 35 degres</li>
  <li>Production annuelle estimee : ~4 200 kWh</li>
  <li>Taux d'autoconsommation : 37-40 % (hypothese CWaPE : 37,76 %)</li>
  <li>Prix de l'electricite evite : 0,38 EUR/kWh</li>
  <li>Tarif d'injection moyen : 0,03 EUR/kWh</li>
  <li>Cout installe cle en main : 6 500 - 8 000 EUR (TVA 6 % renovation)</li>
  <li>Tarif prosumer (ORES) : 403 EUR/an</li>
</ul>

<h3>Revenus annuels estimes</h3>
<ul>
  <li>Autoconsommation (1 600 kWh x 0,38 EUR) : <strong>~608 EUR</strong></li>
  <li>Injection surplus (2 600 kWh x 0,03 EUR) : <strong>~78 EUR</strong></li>
  <li>Tarif prosumer : <strong>-403 EUR</strong></li>
  <li><strong>Gain net annuel : ~283 EUR</strong> (scenario conservateur, sans optimisation)</li>
</ul>

<p>Avec une optimisation de l'autoconsommation (programmation du chauffe-eau, machine a laver en journee, etc.), le taux monte facilement a 50-60 %, ce qui porte le gain net annuel a <strong>500-700 EUR</strong>.</p>

<h3>Retour sur investissement</h3>
<ul>
  <li>Scenario conservateur (37 % autoconsommation) : <strong>retour en 7-8 ans</strong></li>
  <li>Scenario optimise (55 % autoconsommation) : <strong>retour en 5-6 ans</strong></li>
  <li>Scenario avec batterie domestique : retour plus long mais gains plus eleves a terme</li>
</ul>

<p>Sur 25 ans de duree de vie des panneaux, le gain cumule se situe entre <strong>20 000 et 35 000 EUR</strong> selon le profil de consommation et l'evolution des prix de l'energie. Cela represente un rendement annuel d'environ <strong>12 %</strong> sur l'investissement initial — bien au-dessus de n'importe quel livret d'epargne.</p>

<h2>Le tarif IMPACT : un avantage pour les nouveaux installateurs</h2>

<p>Depuis 2025, le tarif IMPACT remplace progressivement le tarif capacitaire classique. Ce tarif penalise les pics de consommation et recompense une consommation lissee. Pour les proprietaires de panneaux solaires, c'est une opportunite : en deplacant la consommation vers les heures de production, vous reduisez votre facture reseau. <a href="/services/batteries-domestiques/">L'ajout d'une batterie domestique</a> amplifie encore cet avantage.</p>

<h2>Ce qu'on ne vous dit pas (et qui change tout)</h2>

<p>En tant qu'ancien inspecteur, je vois regulierement trois erreurs qui plombent la rentabilite :</p>

<ol>
  <li><strong>Le surdimensionnement</strong> — installer 10 kWc quand votre consommation justifie 5 kWc gonfle le tarif prosumer sans augmenter proportionnellement votre gain.</li>
  <li><strong>L'orientation non compensee</strong> — un installateur serieux ajuste le nombre de panneaux et l'inclinaison a votre toiture reelle, pas a un schema ideal.</li>
  <li><strong>L'absence de plan d'autoconsommation</strong> — sans strategie pour consommer en journee, vous laissez filer la majorite de votre production vers le reseau a un prix derisoire.</li>
</ol>

<p>Ces erreurs, je les ai constatees sur des centaines d'installations. Elles sont evitables a 100 %. Consultez notre page <a href="/pieges-a-eviter/">Pieges a eviter</a> pour les details.</p>

<h2>Conclusion : oui, c'est rentable — si c'est bien fait</h2>

<p>Les panneaux solaires en 2026 ne sont pas le placement miracle qu'ils etaient en 2012 avec le systeme Solwatt. Mais ils restent un investissement solide, avec un retour previsible et un gain reel sur 25 ans. La condition : un dimensionnement adapte a votre consommation reelle et une installation de qualite.</p>

<p><strong>Vous voulez savoir ce que donnerait le calcul pour votre maison ?</strong> Nous proposons un <a href="/contact/">diagnostic energetique gratuit</a> : on analyse votre consommation, votre toiture, votre GRD, et on vous donne les chiffres reels avant toute decision. Pas d'engagement, pas de surprise.</p>
`;

// ---------------------------------------------------------------------------
// Article 2 — Tarif prosumer 2026
// ---------------------------------------------------------------------------
const bodyTarifProsumer = `
<p class="lead">Le tarif prosumer est devenu l'epouvantail du photovoltaique wallon. Pourtant, une fois qu'on comprend ce que c'est reellement et comment il fonctionne, il perd beaucoup de son pouvoir d'intimidation. Voici une explication claire, avec les montants a jour et les strategies concretes pour en limiter l'impact.</p>

<h2>Le tarif prosumer, c'est quoi exactement ?</h2>

<p>Le tarif prosumer n'est <strong>pas une taxe</strong>. C'est une redevance pour l'utilisation du reseau de distribution. Quand vous injectez de l'electricite dans le reseau et que vous la prelevez plus tard, vous utilisez le reseau comme une "batterie virtuelle". Le tarif prosumer est le prix de ce service.</p>

<p>Avant son introduction, les proprietaires de panneaux solaires utilisaient le reseau gratuitement pour stocker leur surplus. Les couts de reseau etaient alors reportes sur les menages sans panneaux. Le tarif prosumer corrige cette inegalite — c'est un principe d'equite, pas une punition.</p>

<h2>Les deux regimes : compensation ou pas</h2>

<h3>Regime 1 : installations mises en service avant le 1er janvier 2024</h3>

<p>Si votre installation a ete raccordee avant cette date, vous beneficiez encore du mecanisme de <strong>compensation</strong> jusqu'au 31 decembre 2030. Concretement :</p>

<ul>
  <li>Votre compteur communicant mesure les prelevements et les injections separement.</li>
  <li>En fin de periode de facturation, les injections sont soustraites des prelevements pour calculer votre consommation nette.</li>
  <li>Vous payez le tarif prosumer en sus, calcule sur la puissance de votre onduleur.</li>
</ul>

<p>Ce regime reste avantageux. La compensation efface une grande partie de votre facture d'electricite, et le tarif prosumer est un cout fixe previsible.</p>

<h3>Regime 2 : installations mises en service a partir du 1er janvier 2024</h3>

<p>Plus de compensation. Chaque kWh injecte et chaque kWh preleve sont comptes independamment. L'electricite injectee est valorisee au tarif d'injection de votre fournisseur (generalement entre 1 et 6 c/kWh). Le tarif prosumer s'applique egalement.</p>

<p>Dans ce regime, <strong>l'autoconsommation devient encore plus determinante</strong>. Chaque kWh consomme directement vaut environ 38 c/kWh (le prix que vous n'achetez pas au reseau), contre 1 a 6 c/kWh pour un kWh injecte.</p>

<h2>Montants du tarif prosumer par GRD (2026)</h2>

<p>Le tarif prosumer est calcule par la CWaPE sur base d'une hypothese d'autoconsommation de 37,76 %. Il varie selon votre gestionnaire de reseau :</p>

<table>
  <thead>
    <tr>
      <th>Gestionnaire de reseau (GRD)</th>
      <th>Tarif annuel (EUR/kWe/an)</th>
      <th>Cout pour 5 kWe</th>
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

<p>Le montant est calcule sur la <strong>puissance de l'onduleur</strong> (en kWe), pas sur la puissance crete des panneaux (kWc). C'est une distinction importante : un installateur competent optimise ce ratio pour reduire votre facture prosumer.</p>

<h2>L'hypothese CWaPE de 37,76 %</h2>

<p>La CWaPE part du principe que vous autoconsommez 37,76 % de votre production. Si votre taux reel est superieur, le tarif prosumer devient proportionnellement moins penalisant par rapport a votre gain total. C'est pourquoi toute strategie d'optimisation de l'autoconsommation ameliore directement votre rentabilite.</p>

<h2>Que se passe-t-il apres le 31 decembre 2030 ?</h2>

<p>Pour les installations du regime 1 (avant 2024), le mecanisme de compensation prend fin au 31 decembre 2030. A partir de 2031, elles basculent dans le meme regime que les installations post-2024 : plus de compensation, injection et prelevement comptes separement.</p>

<p>Ce n'est pas une catastrophe, mais c'est un changement a anticiper. Les proprietaires concernes ont interet a :</p>

<ul>
  <li>Augmenter leur autoconsommation des maintenant (habitudes de consommation, programmateurs)</li>
  <li>Evaluer l'ajout d'une <a href="/services/batteries-domestiques/">batterie domestique</a> avant 2030</li>
  <li>Profiter du tarif IMPACT pour lisser leur consommation</li>
</ul>

<h2>Le tarif IMPACT : la nouvelle donne</h2>

<p>Le tarif IMPACT (Incentive Metering for Peak Adjustment and Consumption Tuning) modifie la logique de facturation du reseau. Au lieu de payer uniquement sur les kWh consommes, vous payez aussi en fonction de vos <strong>pics de prelevement</strong> (les quarts d'heure ou vous consommez le plus).</p>

<p>Pour un menage avec panneaux solaires, c'est une opportunite : en etalant votre consommation et en evitant les pics (pas de four + seche-linge + borne de recharge en meme temps), vous reduisez cette composante de votre facture. C'est un avantage concret que les installations bien dimensionnees et bien utilisees peuvent exploiter.</p>

<h2>5 strategies concretes pour reduire l'impact du tarif prosumer</h2>

<ol>
  <li><strong>Deplacez vos consommations en journee</strong> — lave-linge, lave-vaisselle, chauffe-eau : programmez-les entre 10h et 15h.</li>
  <li><strong>Ne surdimensionnez pas</strong> — plus de puissance onduleur = plus de tarif prosumer. Adaptez a votre consommation reelle.</li>
  <li><strong>Optimisez le ratio panneaux/onduleur</strong> — un installateur experimente peut legalement installer plus de kWc de panneaux sur un onduleur de puissance inferieure (dans les limites techniques).</li>
  <li><strong>Considerez une batterie</strong> — pas toujours rentable, mais dans certains profils, elle deplace suffisamment de consommation pour compenser son cout. <a href="/blog/batterie-domestique-rentable/">Lisez notre analyse detaillee ici.</a></li>
  <li><strong>Surveillez votre contrat d'injection</strong> — les tarifs d'injection varient entre fournisseurs. Un comparatif peut faire gagner 50-100 EUR/an.</li>
</ol>

<h2>En resume</h2>

<p>Le tarif prosumer est un cout reel mais maitrisable. Il n'annule pas la rentabilite du photovoltaique — il la reduit de facon previsible et optimisable. Les installations correctement dimensionnees et bien utilisees restent un investissement solide, meme en tenant compte de cette redevance.</p>

<p>En tant qu'ancien inspecteur electrique, j'ai vu trop d'installations surdimensionnees vendues sur base de simulations irrealistes qui ignoraient le tarif prosumer. <a href="/pieges-a-eviter/">C'est le piege numero un a eviter.</a> Un bon dimensionnement commence par une analyse serieuse de votre consommation, pas par le nombre de panneaux qu'on peut poser sur votre toit.</p>

<p><strong>Vous voulez comprendre l'impact reel du tarif prosumer sur votre situation ?</strong> Notre <a href="/contact/">diagnostic energetique gratuit</a> inclut le calcul complet avec votre GRD, votre profil de consommation et vos options d'optimisation. C'est le point de depart d'une decision eclairee.</p>
`;

// ---------------------------------------------------------------------------
// Article 3 — Batterie domestique rentable
// ---------------------------------------------------------------------------
const bodyBatterieDomestique = `
<p class="lead">La batterie domestique fait rever. Stocker son electricite solaire, devenir autonome, ne plus dependre du reseau. La realite est plus nuancee. Dans certains cas, c'est un excellent investissement. Dans d'autres, c'est une depense prematuree. Voici le calcul honnete.</p>

<p>Chez Be'energies, on ne vend pas une batterie a un client si elle n'est pas rentable pour sa situation. C'est un principe, pas un slogan. Je suis Benoit Dezso, ancien inspecteur en conformite electrique, et j'ai passe des annees a constater les consequences d'equipements mal dimensionnes ou vendus sur base d'arguments commerciaux plutot que techniques. La batterie domestique merite mieux que ca.</p>

<h2>Ce qu'une batterie domestique fait (et ne fait pas)</h2>

<p>Une batterie domestique stocke l'electricite produite par vos panneaux solaires pendant la journee et la restitue le soir ou la nuit, quand vous en avez besoin. Cela augmente votre <strong>taux d'autoconsommation</strong> — la part de votre production que vous utilisez directement.</p>

<p>Ce qu'elle ne fait <strong>pas</strong> :</p>
<ul>
  <li>Vous rendre autonome du reseau (sauf systeme hybride specifique, beaucoup plus couteux)</li>
  <li>Garantir une rentabilite automatique quel que soit votre profil</li>
  <li>Remplacer un bon dimensionnement de l'installation solaire elle-meme</li>
</ul>

<h2>Combien ca coute ?</h2>

<p>En 2026, une batterie domestique de qualite (lithium-ion, 5 a 10 kWh de capacite utile) coute entre <strong>5 000 et 8 000 EUR</strong> installee, TVA 6 % incluse pour une habitation de plus de 10 ans.</p>

<p>Les marques fiables sur le marche belge incluent Huawei LUNA, BYD, SolarEdge Home Battery et Enphase. Le choix depend de la compatibilite avec votre onduleur et de votre profil de consommation — pas du marketing du fabricant.</p>

<h2>Regime avant 2024 : la batterie est rarement prioritaire</h2>

<p>Si votre installation photovoltaique a ete mise en service avant le 1er janvier 2024, vous beneficiez encore de la <strong>compensation</strong> (compteur qui "tourne a l'envers") jusqu'au 31 decembre 2030. Dans ce cas :</p>

<ul>
  <li>Le reseau fait deja office de batterie virtuelle gratuite (hors tarif prosumer).</li>
  <li>L'ajout d'une batterie physique n'apporte qu'un gain marginal : reduction du tarif prosumer et optimisation du tarif IMPACT.</li>
  <li>L'economie annuelle se situe entre <strong>220 et 350 EUR</strong> — insuffisant pour justifier l'investissement a court terme.</li>
</ul>

<p>Pour ces menages, il est souvent plus judicieux d'attendre 2029-2030 pour evaluer l'ajout d'une batterie avant la fin de la compensation. Les prix auront baisse et la technologie aura progresse.</p>

<h2>Regime apres 2024 : la batterie change la donne</h2>

<p>Sans compensation, chaque kWh injecte dans le reseau ne vaut que 1 a 6 c/kWh, alors qu'il vous aurait fait economiser ~38 c/kWh si vous l'aviez consomme. La batterie corrige exactement ce desequilibre :</p>

<ul>
  <li>Elle capte le surplus de production en journee.</li>
  <li>Elle le restitue pendant les heures ou vous consommez sans produire (soir, nuit, matin).</li>
  <li>Chaque kWh "deplace" represente un gain de 32 a 37 centimes (prix evite moins cout d'injection perdu).</li>
</ul>

<h3>Estimation des economies annuelles</h3>
<ul>
  <li>Batterie 5 kWh, menage standard : <strong>350 - 450 EUR/an</strong></li>
  <li>Batterie 10 kWh, menage a consommation elevee : <strong>450 - 600 EUR/an</strong></li>
  <li>Avec vehicule electrique charge en soiree : <strong>500 - 700 EUR/an</strong></li>
</ul>

<h3>Retour sur investissement</h3>
<ul>
  <li>Scenario standard (5 kWh, 400 EUR/an d'economie) : <strong>retour en 13-15 ans</strong></li>
  <li>Scenario optimise (10 kWh, profil favorable) : <strong>retour en 10-12 ans</strong></li>
  <li>Avec synergie vehicule electrique : <strong>retour en 9-11 ans</strong></li>
</ul>

<p>Les batteries actuelles offrent des garanties de 10 a 15 ans. Le retour sur investissement se situe donc a la limite de la duree de garantie. Ce n'est pas un placement spectaculaire — c'est un investissement qui se justifie dans le bon contexte.</p>

<h2>L'avantage tarif IMPACT</h2>

<p>Le tarif IMPACT penalise les pics de consommation (les quarts d'heure ou vous prelevez le plus sur le reseau). Une batterie bien geree <strong>ecrete ces pics</strong> en fournissant de l'electricite stockee pendant les moments de forte demande. Ce gain sur la composante reseau est souvent sous-estime dans les calculs simplifies, mais il peut representer 50 a 100 EUR supplementaires par an.</p>

<h2>Quand la batterie est un bon choix</h2>

<ul>
  <li>Installation post-2024 (pas de compensation)</li>
  <li>Consommation elevee en soiree et la nuit (famille, teletravail partiel, vehicule electrique)</li>
  <li>Installation solaire deja optimisee et correctement dimensionnee</li>
  <li>Volonte de maximiser l'independance energetique</li>
  <li>Projet de vehicule electrique a moyen terme</li>
</ul>

<h2>Quand la batterie n'est PAS un bon choix</h2>

<ul>
  <li>Installation pre-2024 avec compensation active — attendez 2029-2030</li>
  <li>Faible consommation globale (moins de 3 000 kWh/an)</li>
  <li>Installation solaire surdimensionnee ou mal orientee (corrigez d'abord le probleme de base)</li>
  <li>Budget serre ou endettement — les panneaux seuls restent prioritaires</li>
  <li>Argumentation du vendeur basee sur "l'autonomie" sans chiffres concrets</li>
</ul>

<h2>Les regles de dimensionnement</h2>

<p>Un bon dimensionnement de batterie suit deux principes :</p>

<ol>
  <li><strong>Capacite adaptee au surplus reel</strong> — une batterie de 10 kWh est inutile si votre surplus quotidien moyen est de 4 kWh. Vous payez pour de la capacite que vous n'utilisez jamais.</li>
  <li><strong>Capacite adaptee a la consommation nocturne</strong> — si vous consommez 5 kWh entre 18h et 8h, une batterie de 5 kWh suffit. Plus grand ne fait que ralentir le retour sur investissement.</li>
</ol>

<p>C'est du bon sens technique, mais j'ai inspecte des dizaines d'installations ou une batterie de 10 kWh avait ete vendue a un menage qui en aurait eu assez avec 5 kWh. Le resultat : un surcout de 2 000 a 3 000 EUR pour zero benefice supplementaire. Ce genre d'erreur, <a href="/pieges-a-eviter/">c'est exactement ce qu'on vous aide a eviter</a>.</p>

<h2>La synergie batterie + vehicule electrique</h2>

<p>Si vous possedez ou prevoyez un vehicule electrique, la batterie domestique prend une dimension supplementaire. Vous pouvez :</p>

<ul>
  <li>Stocker la production solaire en journee</li>
  <li>Recharger le vehicule le soir via la batterie, a cout quasi nul</li>
  <li>Lisser vos pics de consommation (la borne de recharge est l'un des plus gros postes de pointe)</li>
</ul>

<p>Dans ce scenario, l'economie annuelle combinee peut depasser 700 EUR, ce qui raccourcit significativement le retour sur investissement. <a href="/services/panneaux-photovoltaiques/">Combinee a une installation photovoltaique bien dimensionnee</a>, la batterie devient alors un maillon logique du systeme.</p>

<h2>Notre approche</h2>

<p>Quand un client nous demande une batterie, on commence par analyser ses donnees de consommation reelles — pas par sortir un catalogue. Si les chiffres montrent que la batterie n'est pas rentable dans sa situation, on le dit clairement. On prefere un client satisfait qui revient dans trois ans quand sa situation aura change, plutot qu'un client qui decouvre au bout de deux ans qu'il a surpaye un equipement inutile.</p>

<p><strong>Vous hesitez sur l'ajout d'une batterie ?</strong> Notre <a href="/contact/">diagnostic energetique gratuit</a> inclut l'analyse complete : votre profil de consommation, votre regime tarifaire, votre surplus solaire reel, et une recommandation chiffree. Pas de pression, pas de vente forcee — juste les chiffres.</p>
`;

// ---------------------------------------------------------------------------
// Article 4 — Prix panneaux solaires Belgique 2026
// ---------------------------------------------------------------------------
const bodyPrixPanneaux = `
<p class="lead">Le prix d'une installation solaire en Belgique est probablement la premiere chose que vous cherchez. Et c'est normal. Mais en tant qu'ancien inspecteur en conformite electrique, je dois vous prevenir : le prix affiche ne raconte jamais toute l'histoire. Ce qui compte, c'est ce que vous obtenez pour ce prix — et surtout ce qui manque dans les devis les moins chers.</p>

<h2>Ce qui determine le prix d'une installation solaire</h2>

<p>Le cout d'une installation photovoltaique ne se resume pas a "X panneaux x prix unitaire". Plusieurs facteurs techniques influencent directement le prix final :</p>

<ul>
  <li><strong>La qualite des panneaux</strong> — les panneaux Tier 1 (Longi, Trina, JA Solar, etc.) offrent des garanties de performance lineaire sur 25-30 ans. Les panneaux budget degradent plus vite, produisent moins par m2 et tombent en panne plus tot.</li>
  <li><strong>Le choix de l'onduleur</strong> — c'est le coeur du systeme. Un onduleur fiable (SMA, Fronius, Huawei, Enphase) dure 12-15 ans minimum. Un onduleur premier prix peut lacher apres 5 ans. Remplacement : 1 500 a 2 500 EUR.</li>
  <li><strong>Le systeme de montage</strong> — la structure qui fixe les panneaux a votre toiture doit resister aux vents et aux charges. Un systeme certifie coute plus cher qu'un bricolage, mais il ne s'envole pas lors d'une tempete.</li>
  <li><strong>La complexite de la toiture</strong> — toiture plate, toiture en ardoise, presence de velux, cheminee, orientation multiple : chaque contrainte ajoute du temps de main-d'oeuvre et du materiel specifique.</li>
  <li><strong>La mise a niveau du tableau electrique</strong> — si votre tableau n'est pas aux normes RGIE actuelles, il faudra le remplacer ou l'adapter. Comptez 500 a 1 500 EUR supplementaires.</li>
  <li><strong>La qualite de la main-d'oeuvre</strong> — une equipe formee, assuree et experimentee coute plus cher qu'un sous-traitant itinerant. Mais elle pose correctement, connecte proprement et laisse une installation qui passe le controle de conformite du premier coup.</li>
</ul>

<h2>Fourchettes de prix en 2026 par taille d'installation</h2>

<p>Voici les prix constates en Belgique pour des installations cle en main de qualite, TVA 6 % incluse (habitations de plus de 10 ans) :</p>

<table>
  <thead>
    <tr>
      <th>Puissance</th>
      <th>Nombre de panneaux (indicatif)</th>
      <th>Prix installe TTC (TVA 6 %)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>3 kWc</td><td>6 a 8</td><td>5 000 - 6 500 EUR</td></tr>
    <tr><td>4 a 5 kWc</td><td>9 a 12</td><td>6 500 - 9 000 EUR</td></tr>
    <tr><td>6 a 8 kWc</td><td>13 a 18</td><td>9 000 - 13 000 EUR</td></tr>
    <tr><td>10+ kWc</td><td>22+</td><td>13 000 - 20 000 EUR</td></tr>
  </tbody>
</table>

<p><strong>TVA 6 % ou 21 % ?</strong> La TVA reduite a 6 % s'applique aux habitations de plus de 10 ans, avec installation realisee par un professionnel agree. Pour les constructions neuves ou les habitations de moins de 10 ans, c'est 21 %. Cette difference represente facilement 1 000 a 2 000 EUR sur une installation standard. Verifiez votre eligibilite avant de comparer les devis.</p>

<h2>Ce qui est inclus dans un devis serieux (et ce qui ne l'est pas)</h2>

<p>Un installateur professionnel inclut dans son devis :</p>

<ul>
  <li>La visite technique prealable a domicile (analyse de la toiture, du tableau, de l'orientation)</li>
  <li>L'etude de dimensionnement basee sur votre consommation reelle</li>
  <li>Tous les composants : panneaux, onduleur, systeme de montage, cablage, protections electriques</li>
  <li>L'installation complete par une equipe qualifiee</li>
  <li>Le raccordement electrique au tableau</li>
  <li>Le controle de conformite RGIE</li>
  <li>Les demarches administratives aupres du GRD (declaration de l'installation)</li>
</ul>

<p><strong>Les signaux d'alerte dans un devis :</strong></p>

<ul>
  <li>Pas de visite technique avant le devis — c'est impossible de dimensionner correctement sans voir la toiture et le tableau electrique.</li>
  <li>Prix annonce "par panneau" sans vision systeme — un panneau seul ne produit rien. Ce qui compte, c'est le systeme complet installe.</li>
  <li>Frais supplementaires pour l'echafaudage, la mise aux normes du tableau ou le controle de conformite — ces elements font partie d'une installation serieuse.</li>
  <li>Aucune mention de la marque des panneaux ou de l'onduleur — si le devis ne precise pas le materiel, c'est qu'il y a une raison.</li>
</ul>

<h2>Pourquoi le devis le moins cher est souvent le plus couteux</h2>

<p>En tant qu'ancien inspecteur agree, j'ai vu des centaines d'installations. Et la correlation entre prix bas et problemes est frappante :</p>

<ul>
  <li><strong>Panneaux budget</strong> — degradation acceleree, perte de rendement de 1,5 a 2 % par an au lieu de 0,5 %. Sur 20 ans, vous perdez 20 a 30 % de production par rapport a un panneau Tier 1.</li>
  <li><strong>Onduleurs premier prix</strong> — panne apres 4-6 ans, remplacement a vos frais (1 500 - 2 500 EUR), parfois indisponibilite des pieces car le fabricant a disparu.</li>
  <li><strong>Installation non conforme</strong> — controle RGIE rate, remediation obligatoire (500 a 3 000 EUR), delais supplementaires, et votre assurance habitation qui pourrait contester une couverture en cas de sinistre.</li>
  <li><strong>Sous-traitance en cascade</strong> — le commercial qui vous a vendu l'installation n'est pas celui qui l'installe. En cas de probleme, personne ne repond.</li>
</ul>

<p>J'ai personnellement constate des installations ou le cout de remediation depassait la difference de prix entre le devis bon marche et le devis serieux. Consultez notre page <a href="/pieges-a-eviter/">Pieges a eviter</a> pour des exemples concrets.</p>

<h2>Comment comparer les devis honnetement</h2>

<p>La seule facon fiable de comparer des devis solaires est de raisonner en <strong>EUR par kWc installe</strong>, pas en prix total. Un devis a 8 000 EUR pour 5 kWc (1 600 EUR/kWc) est meilleur qu'un devis a 7 000 EUR pour 3,5 kWc (2 000 EUR/kWc).</p>

<p>Voici ce que vous devez verifier dans chaque devis :</p>

<ol>
  <li><strong>Marque et modele des panneaux</strong> — verifiez qu'ils figurent sur la liste Tier 1 de Bloomberg.</li>
  <li><strong>Marque et modele de l'onduleur</strong> — et la duree de garantie (10 ans minimum, 15-20 ans en option chez les bons fabricants).</li>
  <li><strong>Garantie de performance lineaire</strong> — les panneaux serieux garantissent au moins 84 % de rendement a 25 ans.</li>
  <li><strong>Conformite RGIE incluse</strong> — pas en option, pas en supplement.</li>
  <li><strong>Ce qui est exclu</strong> — lisez les petites lignes. Si l'echafaudage, la mise aux normes ou les demarches GRD sont en supplement, ajoutez-les au prix total avant de comparer.</li>
  <li><strong>Methodologie de simulation</strong> — demandez comment le rendement annonce a ete calcule. Quel logiciel ? Quelles hypotheses d'autoconsommation ? Si personne ne peut repondre, c'est un chiffre en l'air.</li>
</ol>

<p>La transparence sur ces points distingue un installateur serieux d'un commercial. <a href="/blog/panneaux-solaires-rentables-2026/">Notre analyse complete de la rentabilite en 2026</a> vous donne les chiffres de reference pour evaluer n'importe quelle proposition.</p>

<p><strong>Vous voulez un devis base sur votre situation reelle, pas sur un template ?</strong> Notre <a href="/contact/">diagnostic energetique gratuit</a> commence par une visite technique, une analyse de votre consommation et un dimensionnement sur mesure. Vous recevez un devis detaille avec tous les composants, toutes les garanties et zero frais caches. <a href="/services/panneaux-photovoltaiques/">En savoir plus sur nos installations photovoltaiques.</a></p>
`;

// ---------------------------------------------------------------------------
// Article 5 — Borne de recharge a domicile
// ---------------------------------------------------------------------------
const bodyBorneRecharge = `
<p class="lead">L'adoption du vehicule electrique accelere en Belgique. En 2026, plus de 25 % des nouvelles immatriculations sont electriques ou hybrides rechargeables. Et la premiere question pratique qui se pose : comment recharger chez soi, en securite, sans faire sauter le compteur ? Ce guide couvre tout ce qu'il faut savoir — y compris ce que beaucoup d'installateurs ne vous diront pas.</p>

<h2>Pourquoi une borne dediee (et pas une simple prise)</h2>

<p>Techniquement, vous pouvez recharger un vehicule electrique sur une prise domestique standard. En pratique, c'est une mauvaise idee pour trois raisons :</p>

<ul>
  <li><strong>Securite</strong> — une prise classique n'est pas concue pour delivrer 10 amperes en continu pendant 8 a 12 heures. Surchauffe, risque d'incendie, degradation du cablage dans le mur : j'ai inspecte des installations ou la gaine avait fondu dans la paroi. Le proprietaire ne s'en rendait meme pas compte.</li>
  <li><strong>Vitesse de charge</strong> — une prise standard delivre environ 2,3 kW (10 A). Pour une batterie de 60 kWh, comptez plus de 26 heures de charge complete. Une borne 7,4 kW ramene ce temps a 8 heures. Une borne triphase 11 kW : environ 5 heures.</li>
  <li><strong>Fonctionnalites intelligentes</strong> — programmation horaire (recharger pendant les heures creuses ou pendant la production solaire), suivi de consommation, synchronisation avec vos panneaux photovoltaiques, pilotage a distance. Impossible avec une prise murale.</li>
</ul>

<p>En tant qu'ancien inspecteur en conformite electrique, je suis categorique : une borne dediee avec un circuit dedie est le seul choix responsable. Le RGIE l'impose d'ailleurs pour toute installation fixe de recharge.</p>

<h2>Monophase ou triphase : comment choisir</h2>

<p>La majorite des habitations belges sont raccordees en <strong>monophase</strong>. Cela signifie :</p>

<ul>
  <li><strong>Monophase 230 V</strong> — puissance de charge maximale : 7,4 kW (32 A). C'est suffisant pour recharger la plupart des vehicules electriques en une nuit. Pour un usage quotidien de 30 a 50 km, 3 a 4 heures de charge suffisent.</li>
  <li><strong>Triphase 400 V</strong> — puissance de charge : 11 kW (16 A par phase) ou 22 kW (32 A par phase). Necessaire uniquement si vous avez des besoins de recharge rapide ou si vous rechargez plusieurs vehicules.</li>
</ul>

<p>Le passage en triphase n'est pas toujours simple. Il faut :</p>

<ul>
  <li>Verifier la disponibilite aupres de votre GRD (ORES, Sibelga, Fluvius selon la region)</li>
  <li>Adapter le tableau electrique</li>
  <li>Budget supplementaire : 800 a 2 500 EUR selon les travaux necessaires</li>
</ul>

<p><strong>A Bruxelles</strong>, le passage en triphase via Sibelga peut etre plus contraint (disponibilite, delais, couts). Renseignez-vous avant d'acheter une borne triphase.</p>

<p><strong>Regle pratique</strong> : si vous rechargez la nuit et que votre trajet quotidien est inferieur a 80 km, une borne monophase 7,4 kW couvre largement vos besoins. Inutile de surdimensionner.</p>

<h2>Ce que comprend une installation correcte</h2>

<p>Une installation de borne de recharge conforme et durable comprend :</p>

<ul>
  <li><strong>Un circuit dedie</strong> depuis le tableau electrique — cable de section appropriee (6 mm2 minimum pour 32 A), protege par un disjoncteur dedie.</li>
  <li><strong>Un differentiel adapte</strong> — type A minimum (detecte les courants de fuite continus generes par les chargeurs embarques). Certaines bornes exigent un type B, plus couteux mais indispensable pour la securite.</li>
  <li><strong>La conformite RGIE</strong> — l'installation doit etre declaree et conforme. Un controle de conformite est obligatoire si vous modifiez votre installation electrique.</li>
  <li><strong>La declaration au GRD</strong> — votre gestionnaire de reseau doit etre informe de l'installation d'une borne, surtout si elle depasse 5 kW.</li>
</ul>

<p><strong>Fourchette de prix</strong> : comptez entre <strong>1 500 et 3 000 EUR</strong> tout compris (borne + installation + conformite). Ce prix varie selon la distance entre le tableau et l'emplacement de la borne, la necessite ou non d'un differentiel type B et la complexite du cheminement du cable.</p>

<p>Options avancees disponibles :</p>
<ul>
  <li><strong>Charge solaire intelligente</strong> — la borne ajuste sa puissance en fonction de la production de vos panneaux. Vous rechargez avec votre propre electricite au lieu de la revendre a perte au reseau.</li>
  <li><strong>Gestion de charge dynamique (load balancing)</strong> — la borne reduit automatiquement sa puissance quand d'autres gros consommateurs fonctionnent (four, seche-linge), pour eviter de depasser la capacite de votre compteur.</li>
</ul>

<h2>Le piege de la conformite</h2>

<p>C'est le point que la plupart des clients ignorent — et que beaucoup d'electriciens n'abordent pas :</p>

<p>Installer une borne de recharge modifie votre installation electrique. En Belgique, toute modification significative de l'installation electrique doit faire l'objet d'un <strong>controle de conformite RGIE</strong>. Si ce controle n'est pas realise :</p>

<ul>
  <li>Votre installation n'est pas legalement conforme.</li>
  <li>En cas d'incendie ou de sinistre, votre assurance habitation peut refuser la couverture.</li>
  <li>En cas de revente, l'acquereur demandera un controle — et les non-conformites apparaitront.</li>
</ul>

<p>J'ai ete inspecteur agree pendant des annees. Le nombre d'installations de bornes realisees sans controle de conformite est alarmant. Chez Be'energies, chaque installation de borne inclut systematiquement la mise en conformite et le controle. C'est non negociable. <a href="/services/conformite-electrique/">En savoir plus sur la conformite electrique.</a></p>

<h2>Marques que nous recommandons</h2>

<p>Nous ne sommes pas lies a un seul fabricant. Nous choisissons la borne adaptee a la situation du client :</p>

<ul>
  <li><strong>Alfen Eve Single Pro-Line</strong> — robuste, connectee, compatible avec la plupart des systemes de gestion d'energie. Excellente pour les maisons avec panneaux solaires.</li>
  <li><strong>Wallbox Pulsar Plus</strong> — compacte, abordable, application intuitive. Bon rapport qualite-prix en monophase.</li>
  <li><strong>Easee Home</strong> — design epure, load balancing integre, installation rapide. Populaire en Scandinavie, fiabilite prouvee.</li>
  <li><strong>Huawei Smart Charger</strong> — integree nativement avec les onduleurs et batteries Huawei. Choix logique si vous avez deja un ecosysteme Huawei sur votre installation solaire.</li>
</ul>

<p>Le choix depend de votre configuration electrique, de votre vehicule et de vos besoins en fonctionnalites intelligentes — pas du marketing. <a href="/pieges-a-eviter/">Consultez nos conseils pour eviter les mauvais choix.</a></p>

<p><strong>Vous envisagez l'installation d'une borne de recharge ?</strong> Notre <a href="/contact/">diagnostic gratuit</a> inclut l'analyse de votre tableau electrique, la verification de la faisabilite (monophase ou triphase), et une recommandation de borne adaptee a votre vehicule et a votre installation existante. Rien n'est laisse au hasard. <a href="/services/bornes-de-recharge/">Decouvrez notre service bornes de recharge.</a></p>
`;

// ---------------------------------------------------------------------------
// Article 6 — Pompe a chaleur vs chaudiere gaz
// ---------------------------------------------------------------------------
const bodyPompeAChaleur = `
<p class="lead">Faut-il remplacer sa chaudiere gaz par une pompe a chaleur ? La question divise les proprietaires belges. Les partisans de la pompe a chaleur promettent des economies spectaculaires. Les sceptiques rappellent l'investissement eleve et les limites en hiver. La verite, comme souvent, depend de votre situation. Voici le comparatif honnete, sans parti pris.</p>

<h2>Comment fonctionne une pompe a chaleur (en 30 secondes)</h2>

<p>Le modele le plus courant en Belgique est la pompe a chaleur <strong>air-eau</strong>. Son principe :</p>

<ul>
  <li>Elle capte les calories presentes dans l'air exterieur (meme par temperatures negatives).</li>
  <li>Elle les concentre via un cycle thermodynamique (compresseur).</li>
  <li>Elle les transfere a l'eau de votre circuit de chauffage.</li>
</ul>

<p>L'indicateur cle est le <strong>COP (Coefficient of Performance)</strong>. Un COP de 3,5 signifie : pour 1 kWh d'electricite consommee, la pompe a chaleur produit 3,5 kWh de chaleur. C'est ce qui la rend economique malgre le prix eleve de l'electricite.</p>

<p><strong>Ce que la pompe a chaleur n'est pas</strong> : une solution miracle. Son rendement baisse quand la temperature exterieure descend sous -5 a -7 degres C. Elle necessite un dimensionnement precis. Et elle n'est pas adaptee a tous les types de batiments.</p>

<h2>Le vrai comparatif de cout</h2>

<h3>Investissement initial</h3>

<table>
  <thead>
    <tr>
      <th>Solution</th>
      <th>Cout installe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Remplacement chaudiere gaz a condensation</td><td>3 000 - 5 000 EUR</td></tr>
    <tr><td>Pompe a chaleur air-eau (chauffage seul)</td><td>10 000 - 14 000 EUR</td></tr>
    <tr><td>Pompe a chaleur air-eau (chauffage + ECS)</td><td>12 000 - 16 000 EUR</td></tr>
  </tbody>
</table>

<p>L'ecart d'investissement est significatif : 7 000 a 11 000 EUR de difference. C'est le premier frein pour la majorite des menages. Mais ce n'est qu'une partie du calcul.</p>

<h3>Couts de fonctionnement annuels</h3>

<p>Pour un besoin de chauffage de 20 000 kWh par an (maison moyenne en Belgique) :</p>

<table>
  <thead>
    <tr>
      <th>Poste</th>
      <th>Chaudiere gaz</th>
      <th>Pompe a chaleur (COP 3,5)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Energie necessaire</td><td>20 000 kWh gaz</td><td>5 700 kWh electricite</td></tr>
    <tr><td>Prix unitaire</td><td>~0,08 EUR/kWh</td><td>~0,38 EUR/kWh</td></tr>
    <tr><td>Cout energetique annuel</td><td>~1 600 EUR</td><td>~2 170 EUR</td></tr>
    <tr><td>Cout effectif par kWh de chaleur</td><td>~0,08 EUR</td><td>~0,11 EUR</td></tr>
    <tr><td>Entretien annuel</td><td>150 - 250 EUR</td><td>100 - 200 EUR</td></tr>
    <tr><td><strong>Total annuel</strong></td><td><strong>~1 800 EUR</strong></td><td><strong>~1 300 EUR</strong></td></tr>
  </tbody>
</table>

<p><strong>Attention</strong> : le cout annuel de la pompe a chaleur dans ce tableau suppose un COP moyen reel de 3,5 sur l'annee. Si la maison est mal isolee ou si les emetteurs de chaleur sont inadequats, le COP reel peut descendre a 2,5 — et l'economie disparait presque entierement.</p>

<h3>Retour sur investissement</h3>

<p>Avec une economie annuelle de ~500 EUR et un surinvestissement de 8 000 a 10 000 EUR, le retour se situe entre <strong>8 et 12 ans</strong> hors primes. Les primes regionales (Wallonie, Bruxelles, Flandre) peuvent reduire ce delai de 2 a 4 ans selon votre situation et les montants en vigueur.</p>

<p>L'evolution du prix du gaz est le facteur decisif a long terme. Si le gaz augmente de 5 % par an (tendance probable avec la taxation carbone croissante), le retour s'accelere. Si le gaz reste stable, le retour est plus lent mais reste positif sur la duree de vie de l'appareil (15-20 ans).</p>

<h2>Quand la pompe a chaleur est le bon choix</h2>

<ul>
  <li><strong>Maison bien isolee</strong> (ou renovation energetique prevue) — la pompe a chaleur fonctionne avec de l'eau a basse temperature (35-45 degres C). Un batiment performant permet d'exploiter pleinement ce regime.</li>
  <li><strong>Chauffage par le sol</strong> — c'est le couple ideal. Le plancher chauffant fonctionne a 30-35 degres C, exactement dans la plage optimale de la PAC.</li>
  <li><strong>Grands radiateurs basse temperature</strong> — les radiateurs surdimensionnes d'origine peuvent fonctionner en basse temperature. A verifier au cas par cas.</li>
  <li><strong>Combinaison avec panneaux solaires</strong> — l'electricite produite par vos panneaux alimente directement la pompe a chaleur. Le cout de fonctionnement chute drastiquement. <a href="/services/panneaux-photovoltaiques/">En savoir plus sur la synergie PV + PAC.</a></li>
  <li><strong>Construction neuve ou renovation lourde</strong> — c'est le moment ideal pour integrer une PAC dans le systeme global.</li>
</ul>

<h2>Quand la pompe a chaleur n'est PAS le bon choix</h2>

<ul>
  <li><strong>Maison mal isolee sans projet de renovation</strong> — la PAC devra produire de l'eau a haute temperature (60-70 degres C) pour compenser les deperditions. Le COP chute a 2 voire moins. Vous consommez presque autant qu'avec une resistance electrique.</li>
  <li><strong>Petits radiateurs haute temperature</strong> — les anciens radiateurs dimensionnes pour fonctionner a 70-80 degres C ne sont pas compatibles avec une PAC sans remplacement. Le cout de remplacement des emetteurs s'ajoute au budget.</li>
  <li><strong>Budget contraint sans acces aux primes</strong> — si l'investissement initial met le menage en difficulte financiere, une chaudiere gaz a condensation neuve reste un choix rationnel a court terme.</li>
  <li><strong>Tres petite habitation</strong> — en dessous de 10 000 kWh de besoin de chauffage annuel, l'economie absolue est trop faible pour justifier l'ecart d'investissement dans un delai raisonnable.</li>
</ul>

<h2>Le piege du dimensionnement</h2>

<p>C'est le point critique que la plupart des vendeurs survolent — et celui qui fait la difference entre une installation performante et un gouffre financier.</p>

<ul>
  <li><strong>PAC surdimensionnee</strong> — elle cycle trop frequemment (s'allume et s'eteint en boucle). Consequences : usure prematuree du compresseur, surconsommation, bruit, inconfort. J'ai inspecte des maisons ou la PAC de 14 kW avait ete installee dans une maison qui en demandait 8 kW. Le proprietaire se plaignait de bruit, de factures elevees et de pannes repetees.</li>
  <li><strong>PAC sous-dimensionnee</strong> — elle ne couvre pas les besoins par temps froid. La resistance electrique d'appoint prend le relais — a 0,38 EUR/kWh sans COP. Les factures hivernales explosent. Le proprietaire conclut que "la pompe a chaleur, ca ne marche pas".</li>
</ul>

<p>Un dimensionnement correct exige un <strong>calcul de deperditions thermiques</strong> (norme NBN EN 12831), pas une estimation au doigt mouille basee sur la surface. Ce calcul tient compte de l'isolation, des fenetres, de l'exposition, du volume et de la temperature de design. <a href="/pieges-a-eviter/">C'est l'un des pieges les plus couteux a eviter.</a></p>

<h2>La synergie PV + pompe a chaleur</h2>

<p>Combiner panneaux photovoltaiques et pompe a chaleur est l'une des strategies energetiques les plus efficaces pour un menage belge :</p>

<ul>
  <li><strong>En hiver</strong> — la PAC consomme de l'electricite que vos panneaux produisent en partie, meme avec un ensoleillement reduit. Chaque kWh autoconsomme vaut 0,38 EUR economise.</li>
  <li><strong>En ete</strong> — la PAC reversible fournit la climatisation. Avec une production solaire maximale, le refroidissement est quasiment gratuit.</li>
  <li><strong>Sur l'annee</strong> — la PAC consomme de l'electricite toute l'annee (chauffage + ECS), ce qui augmente votre taux d'autoconsommation solaire et ameliore la rentabilite globale de l'installation PV.</li>
</ul>

<p>Dans un scenario PV + PAC bien dimensionne, le cout de chauffage annuel peut descendre sous <strong>600 EUR</strong>, contre 1 600 EUR au gaz. C'est ce type de synergie qui transforme l'equation financiere. <a href="/services/panneaux-photovoltaiques/">Decouvrez nos installations photovoltaiques.</a></p>

<p><strong>Vous hesitez entre pompe a chaleur et chaudiere gaz ?</strong> La reponse depend de votre batiment, de votre systeme de chauffage actuel et de votre projet de renovation. Notre <a href="/contact/">diagnostic energetique gratuit</a> inclut l'analyse de votre situation et une recommandation chiffree — pas un argumentaire de vente. <a href="/services/pompes-a-chaleur/">En savoir plus sur nos installations de pompes a chaleur.</a></p>
`;

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export const blogArticles: BlogArticle[] = [
  {
    slug: "prix-panneaux-solaires-belgique-2026",
    title: "Prix des panneaux solaires en Belgique en 2026 : guide complet",
    excerpt:
      "De 5 000 a 20 000 EUR selon la taille : ce qui determine le prix, ce qu'un devis serieux doit inclure, et pourquoi le moins cher coute souvent plus.",
    date: "2026-03-05",
    author: "Benoit Dezso",
    readingTime: 7,
    tags: ["photovoltaique", "prix", "belgique"],
    relatedServices: ["panneaux-photovoltaiques", "batteries-domestiques"],
    body: bodyPrixPanneaux,
  },
  {
    slug: "panneaux-solaires-rentables-2026",
    title: "Les panneaux solaires sont-ils encore rentables en 2026 ?",
    excerpt:
      "Tarif prosumer, tarifs d\u2019injection, autoconsommation : un ancien inspecteur vous donne les vrais chiffres.",
    date: "2026-03-01",
    author: "Benoit Dezso",
    readingTime: 8,
    tags: ["photovoltaique", "rentabilite", "tarif-prosumer"],
    relatedServices: ["panneaux-photovoltaiques", "batteries-domestiques"],
    body: bodyPanneauxRentables,
  },
  {
    slug: "borne-recharge-domicile-guide",
    title: "Installer une borne de recharge chez soi : le guide complet",
    excerpt:
      "Monophase ou triphase, conformite RGIE, prix, marques : tout ce qu'il faut savoir avant d'installer une borne de recharge a domicile.",
    date: "2026-02-28",
    author: "Benoit Dezso",
    readingTime: 8,
    tags: ["borne-recharge", "vehicule-electrique", "guide"],
    relatedServices: ["bornes-de-recharge", "conformite-electrique"],
    body: bodyBorneRecharge,
  },
  {
    slug: "tarif-prosumer-2026",
    title:
      "Tarif prosumer 2026 en Wallonie : ce qui change et ce que ca coute",
    excerpt:
      "Les montants par GRD, les deux regimes (avant/apres 2024), et comment optimiser votre installation.",
    date: "2026-02-15",
    author: "Benoit Dezso",
    readingTime: 6,
    tags: ["tarif-prosumer", "wallonie", "reglementation"],
    relatedServices: ["panneaux-photovoltaiques"],
    body: bodyTarifProsumer,
  },
  {
    slug: "pompe-chaleur-vs-chaudiere-gaz",
    title: "Pompe a chaleur ou chaudiere gaz : le comparatif honnete",
    excerpt:
      "Investissement, couts de fonctionnement, conditions ideales : le comparatif sans parti pris pour faire le bon choix de chauffage.",
    date: "2026-02-10",
    author: "Benoit Dezso",
    readingTime: 8,
    tags: ["pompe-a-chaleur", "chauffage", "comparatif"],
    relatedServices: ["pompes-a-chaleur", "panneaux-photovoltaiques"],
    body: bodyPompeAChaleur,
  },
  {
    slug: "batterie-domestique-rentable",
    title: "Une batterie domestique est-elle rentable ? Le calcul honnete",
    excerpt:
      "On ne vous vend pas une batterie si elle n\u2019est pas rentable. Voici comment on calcule.",
    date: "2026-01-20",
    author: "Benoit Dezso",
    readingTime: 7,
    tags: ["batterie", "rentabilite", "autoconsommation"],
    relatedServices: ["batteries-domestiques", "panneaux-photovoltaiques"],
    body: bodyBatterieDomestique,
  },
];

export function getBlogArticleBySlug(
  slug: string
): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
