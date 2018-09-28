
		alert("Welkom bij Bladerunner");
		
		alert("Je bent met een crew in een loft. Je bent aan het plannen om een bank overval te plegen. Er staat een bord in de kamer met alle mogelijkheden.");
		
		alert("De mogelijkheden zijn: Wat voor getaway voertuig je gaat gebruiken. Wat voor wapen loadout je crew gaat gebruiken en de plan van aanpak.");
		
		var choice = prompt("Je eerste keuze is of je STEALTH of NO STEALTH naar binnen gaat.").toLowerCase();


				if (choice == "stealth"){

					alert("goede keus");
				 
					alert("Maak hier een keus, watvoor getaway voertuig je wilt gaan gebruiken.");

						 var car = prompt(" De voertuigen waar je uit kan kiezen zijn: een Ferrari( is sneller dan de politie, maar is niet goed bepanserd.) Een politie auto(is niet zo snel als een Ferrari maar is beter bepanserd.)").toLowerCase();

				if (car == "ferrari"){
				 		alert("Nu maar hopen dat je niet teveel beschoten word.");

				 		alert("Omdat je voor de STEALTH optie hebt gekozen is je wapen set een Pistol met een silencer. Ook heb je een Assault rifle met een vizier en een silencer en een mes.");

				 		alert("Nu je je loadout hebt kunnen we beginnen.");

				 		alert("Er zijn in middels 2 dagen voorbij en je hebt eindelijk een Ferrari gevonden die je kan stelen. Dus je gaat naar het adres en komt er achter dat het een zwaar beveiligd gebouw is. Je gaat naar binnen en je ziet de eigenaar voor de auto staan.")

				 			var choice2 = prompt("Wat doe je? schiet je hem neer en ren je naar de auto (VUL IN: neer schieten) OF wacht je totdat de eigenaar weg loopt en er niemand meer bij de auto staat(VUL IN: wachten)").toLowerCase();

				 				if (choice2 == "neer schieten"){
				 					document.write("je bent gespot, en word neergeschoten");
				 				}
				 	
				 				 else if (choice2 == "wachten"){
				 					document.write("je rijd naar buiten en word gespot door een bewaker en schiet je dood.")
				 				}

				 }

				 else if (car == "politie auto"){
				 		alert("dus een combinatie van beide huh.");

				 		alert("Omdat je voor de STEALTH optie hebt gekozen is je wapen set een Pistol met een silencer. Ook heb je een Assault rifle met een vizier en een silencer en ook een mes.");

				 		alert("Nu je je loadout hebt kunnen we beginnen.");

				 		alert("We zijn 4 dagen verder en je hebt alles voorberied om een politie auto te stelen. Je gaat naar het bureau verkleed als politie agent zodat je minder erg opvalt. Als je bij de auto aan komt vraagt een agent of je nieuw bent, omdat hij jou nog nooit eerder heeft gezien.")

				 			var choice3 = prompt("Wat doe je? doe je en takedown(VUL IN: takedown) OF blijf je rustig en begin een klein gesprekje tot dat hij weg loopt(VUL IN: gesprek)").toLowerCase();

				
								if (choice3 == "takedown"){
				 					document.write("Een andere agent ziet dit en schiet je neer.");
				 				}

				 				else if (choice3 == "gesprek"){

				 		alert("Goed gedaan! De agent loopt weg en je kan er met de auto vandoor gaan.");

				 		alert("Nu je alles hebt om de bank te overvallen, gaan jij en je crew zich klaar maken voor de overval.");

				 		alert("Er is inmiddels een week verstreken om het helemaal te plannen en er voor te zorgen dat er niks fout kan gaan. Jullie hebben ook de politie auto gepimpt. Het heeft nu kogelvrije banden en kogelvrij glas");

				 		alert("Het is eindelijk zover, vandaag ge je de bank overvallen. Jullie rijden naar de bank en herhalen nog één keer de routine. Als jullie daar aankomen loopt 1 van jullie naar het dak om een gasbom naar binnen te gooien via het ventilatie systeem.");

				 		alert("Als iedereen flauw is gevallen gaan jullie naar binnen. en pakken al het geld dat jullie kunnen pakken. Terwijl jullie bezig zijn met de overval komt er een klant binnen lopen. Als hij ziet wat er gebeurt rent hij naar buiten.");

				 			var choice4 = prompt("Wat doe je? laat je hem gaan (VUL IN: laten gaan) OF stuur je iemand achter hem aan(VUL IN: achtervolgen)");

				 				if (choice4 == "laten gaan"){
				 					document.write("De bezoeker kwam een polite agent tegen en heet hem gewaarschuwd. Hij roept versterking op en jullie worden allemaal gearresteerd.");
				 				}

								else if (choice4 == "achtervolgen"){
									alert("De persoon is weggerend, maar is niet al te snel. Gelukkig jij wel, dus ga je hem achtervolgen. De persoon is gevallen, maar staat daarna gelijk weer op. Dit is goed, want zo is hij snelheid verloren en kan je hem pakken. Hij loopt een straat in die doodloopt nu kan je hem te grazen nemen.");

						alert("Je neemt de klant mee terug naar de bank. de rest van je crew heeft inmiddels al het geld al uit de bank gehaald.");

						alert("Je gaat snel naar je getaway voertuig en rijd weg");

							document.write("Gefeliciteerd je hebt de bank overvallen.");
								



									}


				 			}

				 			
					}

				 
			}


		

				








				else if (choice == "no stealth"){
					alert("Niet mijn keus, maar oke.");

					alert("Maak hier een keus, watvoor getaway voertuig je wilt gaan gebruiken.");

						var car2 = prompt("De voertuigen waar je uit kan kiezen zijn: BMW(sneller dan de gemmidelde politie auto, maar niet heel goed bepanserd) OF een SWAT busje(niet heel erg snel, maar wel heel goed bepanserd)").toLowerCase();

							if (car2 == "bmw"){

					alert("Dus je gaat voor snelheid in plaats van veiligheid");

					alert("Omdat je voor NO STEALTH hebt gekozen is je wapen set een Assault rifle met een extended mag een vizier, een shotgun en een RPG");

					alert("Nu je alles hebt kun je je gaan klaar maken voor je overval.");

					alert("Er zijn 3 dagen voorbij gegaan. Je kan een vriend van je bellen die werkt als autoverkoper om een BMW voor je te regelen. Of je kan die ene BMW uit je straat stelen");

						var choice5 = prompt("wat doe je? ga je je vried bellen(VUL IN: bellen) OF ga je de auto uit je straat stelen(VUL IN: stelen).").toLowerCase();

							if (choice5 == "bellen"){

					alert("Nu je vriend is ingelicht wilt hij wel een deel van de opbrengst, 15% zelfs. Je gaat er maar mee akkoort, want het is wel de makkelijkste manier om aan een auto te komen.");

					alert("Je neemt die vriend mee naar de loft. Je stelt hem voor aan je crew. Je verteld ook over dat hij 15% van de winst wilt hebben.");

						var choice6 = prompt("De crew wil het liesfst geen extra geld verdelen. Wat doe je? Schiet je je vriend ter plekke neer(VUL IN: schiet neer) OF verdeel je je geld met je vriend erbij(VUL IN: verdelen).").toLowerCase();

							if (choice6 == "schiet neer");{

					alert("Zo dat is meer geld voor je crew.");


							}

							if (choice6 == "verdelen");{

					alert("De crew wilt het liever niet maar ziet het nut er wel van in om hem bij aan het team toe te voegen.");

					alert("Jullie beginnen met plannen maken voor de overval.");

					alert("Die vriend van je blijft erbij en maakt zelf ook notities. Dit vind jij raar want alle notities staan op bord waar jullie naar kijken. Je vraagt hem waarom hij het overneemt, en hij zegt dat hij het thuis nog een even rustig gaat doornemen.");

					alert("De volgende dag doet hij precies het zelfde. Als jullie klaar zijn met het bespreken en naar huis gaan, besluit je hem te volgen naar huis. Maar hij gaat niet naar huis, Maar naar het politie bureau.");

					alert("Het blijkt dat hij al jullie plannen in detail aan de politie doorgeeft.");

					alert("Je volgt hem naar huis en confronteerd hem. Je vraagt waarom hij het door verteld aaan de politie. Hij zegt dat hij betaald werd om informatie te leveren. Je vraagt door wie. Hij zegt door zn baas.");

					alert("Je gaat naar het autobedrijf en vraagt aan hem waarom hij je vriend betaalde voor jullie informatie.");

					alert("Hij is een undercover politie agent. Hij drijgt om jullie allemaal op te pakken.");

					var choice7 = prompt("Wat doe je? Geef je je zelf over(VUL IN: overgeven) OF doe je niks en loop je weg?(weglopen)").toLowerCase();

						//if(choice7 == )


				}

							

							

					alert("Er gaat een week voorbij en jullie hebben alles gepland tot op de seconde zodat er niks fout kan gaan.");

					alert("Het is eindelijk zover, je gaat vandaag de bank overvallen.");

					alert("")


								

								


						}

							//else if (choice5 == "stelen")


				}
						
						//else if (car2 == "swat busje")
						
					
		}






			
		