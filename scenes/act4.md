# act4

```
SceneSetup.act4();
publish("SAVE_GAME", ["act4"]);
Game.FORCE_CANT_SKIP = true;
```

(...5001)

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n3: (juego guardado)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
var hong_frame = _.INJURED ? 9 : 0;
publish("act4", ["hong_walks_in",hong_frame]);
sfx("grass_step1", {volume:0.1});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.2});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.25});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.3});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...1667)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...1333)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.20});
```

(...167)

```
publish("act4_hong_sits");
```

(...66)

```
publish("act4", ["hong_transition", "next"]);
sfx("squeak");
```

(...133)

`publish("act4", ["hong_transition", "next"]);`

(...1333)

```
publish("act4", ["hong_transition", "next"]);
sfx("rustle");
```

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1001)

```
publish("act4", ["hong_transition", "next"]);
```

(...333)

```
publish("act4", ["hong_transition", 9]);
sfx("sandwich");
```

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1466)

`publish("act4-out-1");`

(...201)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

```
publish("act4-show-chars");
Game.FORCE_CANT_SKIP = false;
```

(...901)

`hong({body:"sigh_1"})`

(...601)

```
hong({body:"sigh_2"});
bb({eyes:"look_down"});
```

h: *suspiro*

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: ¿Y cuál era la moraleja de esta tonta historia?

`hong({body:"one_up", eyes:"annoyed"})`

h: ¿Qué pudimos aprender? Yo *estaba* siendo estúpido, mis amigos me *estaban* usando y casi *muero*.

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[Si, y ni menciones la cuenta de hospital.](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[Si, y ni menciones el daño hepático.](#act4a_liver)
{{/if}}

[Si, *fue* el peor escenario posible.](#act4a_worst)

[Si, tenía razón.](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: Cierto, no creo que mi plan de seguros cubra "ser un estúpido".

`hong({eyes:"annoyed", mouth:"normal"});`

b: Y aun así... sobrevivimos.

`hong({eyes:"normal"});`

h: ?

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: Definitivamente nos ahorramos algunos años de nuestra expectativa de vida...

`bb({eyes:"surprise"});`

b: Pero *aun* tenemos expectativa de vida. ¡Sobrevivimos!

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ?

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: Y aun así...

h: Hm?

`bb({eyes:"surprise"});`

b: ¡Seguimos vivos!

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: Pero... tú también tenías razón.

`hong({eyes:"surprise"});`

h: Hm?

`bb({eyes:"normal"});`

b: *Estaba* siendo un lobo llorón. Así que cuando llegó un peligro *de verdad* no me creíste, es comprensible.

`bb({eyes:"surprise_r"});`

b: Y aun así ¡sobrevivimos!

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: A pesar de todo, seguimos aquí.

`hong({eyes:"suspect"});`

{{if _.INJURED}}
h: Pareces muy tranquilo considerando que tuvimos una experiencia cercana a la muerte.
{{/if}}

{{if !_.INJURED}}
h: Pareces muy tranquilo considerando que casi tuvimos una experiencia cercana a la muerte.
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: Bueno, hace que todo lo demás sea menos aterrador en comparación. Me pone a pensar un poco.

`bb({eyes:"normal", mouth:"normal"});`

b: Pelear contra ti no sirve, así no te estoy protegiendo...

h: Y pelear contigo tampoco sirve, solo hace que grites más alto.

`bb({eyes:"normal_r"})`

b: Entonces...

`bb({eyes:"normal"})`

h: Talvez no tengamos que pelear.

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
```

(...301)

`publish("smash",[0]);`

(...2001)

```
publish("smash",[1]);
sfx("smash_glass");
```

(...2601)

```
publish("smash",[2]);
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

(...2001)

`Game.FORCE_CANT_SKIP = false;`

(#act4b_2)

# act4b_2

```
music('dontfight',{fade:5, volume:0.6});
bb({eyes:"annoyed_d"});
```

b: No soy un lobo feroz. Pero tampoco soy un lobo guardián.

`bb({eyes:"sad_d"})`

b: Soy un perro maltratado del refugio.

`bb({eyes:"sad"})`

b: Hemos pasado por malos momentos. Talvez un trauma o descuidos. Por eso a veces exagero las cosas y empiezo a:

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: YAP YAP YAP YAP YAP

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: ¡Pero no quiero ser un perro cobarde! ¡Quiero protegerte! ¡Quiero ser un buen perro!

`bb({eyes:"sad", mouth:"normal"});`

b: Humano... ¿domesticarías este lobo?

`hong({eyes:"sad"})`

h: Eh... lo intentaré.

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: Ok. Relaciones sanas con tus emociones. Las relaciones necesitan comunicación. Así que, comuniquémonos.

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: Los próximos cinco minutos sonarán súper melosos, pero ignorémoslo hasta que acabe.

```
hong({body:"hands_2", mouth:"normal"});
```

h: Querido lobo interno... ¿Cómo te sientes?

n2: MIEDO TOTAL USADO:

n2: *HERIDO* {{_.attack_harm_total}}, *ESTAR SOLO* {{_.attack_alone_total}}, *MALA PERSONA* {{_.attack_bad_total}}

n2: ¿SOBRE QUÉ INQUIETUD QUIERES HABLAR PRIMERO? (PODRÁS VER LAS OTRAS LUEGO)

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

[Tengo miedo de ser herido.](#act4_harm)

[Tengo miedo de quedar solo.](#act4_alone)

[Tengo miedo de ser una mala persona.](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: Quiero proteger tu necesidad de seguridad física,

`bb({eyes:"sad_d"})`

b: Pero el *Mundo entero* parece tan peligroso. Está lleno de  tragedia y maldad...

`bb({eyes:"sad"})`

{{if _.a4_fears_discussed==1}}
b: No lo sé, ya es suficiente de que yo elija que decir  ¿Qué dices tú, humano?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Volviendo a ti, humano. ¿En qué piensas?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: ¿Más dudas, humano?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Tienes razón, debemos protegernos.](#act4_harm_skills)

[Expongámonos a más peligro.](#act4_harm_exposure)

[Gracias.](#act4_thanks) `_.thanks_for = "Seguridad física";`

# act4_harm_skills

`bb({eyes:"look_down", body:"paw"})`

b: ¿Pero como? tengo garras y colmillos pero solo soy una metáfora.

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: ¿Podemos aprender autodefensa? ¿Protegernos los unos a los otros en una comunidad? ¿Aumentar nuestra salud general y límites personales?

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: Talvez pero...

[¿Por dónde comenzamos?](#act4_harm_skills_start)

[¿Y si todavía no funciona?](#act4_harm_skills_work)

[¿Y si nos excedemos con la "seguridad"?](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: Hay mucho que hacer, y mucho que arreglar sobre nosotros mismos ¿por dónde comenzamos?

`hong({ body:"shrug", eyes:"surprise" })`

h: Estamos comenzando ahora.

`bb({ eyes:"normal", mouth:"narrow" })`

b: Eh?

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: Estamos practicando buena comunicación ahora. Lo que nos ayudará a detectar mejor el peligro, con menos falsos positivos.

`hong({ eyes:"surprise" });`

h: Y eso ayudará a protegernos del daño.

`hong({ eyes:"normal", mouth:"normal" });`

h: Por lo tanto, este es el entrenamiento de autodefensa.

`bb({ eyes:"normal_r" })`

b: ¿Eh? Estaba esperando algo más como:

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
hong({ eyes:"sad", mouth:"smile" });
bb({ body:"karate_1" });
sfx("hiya");
```

(...1001)

`Game.FORCE_CANT_SKIP = false;`

(#act4_something_else)

# act4_harm_skills_work

`bb({ eyes:"normal" });`

h: No existe una forma 100% segura de protegernos...

`hong({ body:"one_up" });`

h: Pero hasta una mejoría del 1% ayuda.

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: No ves el vaso 99% vacío, ¿pero si 1% lleno?

`bb({ eyes:"normal" });`

h: Eso es mucha ayuda si estás perdido en el desierto.

`bb({ eyes:"closed" });`

b: Bueno, hasta el fondo entonces.

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: ¡Digo, la razón por la que ignorabas mis advertencias es porque *exageraba* con la seguridad!

`bb({ body:"normal", eyes:"normal" })`

h: Nah, tienes razón, deberíamos mantener la seguridad en moderación. Todo en moderación.

`bb({ eyes:"suspect" })`

b: Espera, ¿*TODO* en moderación?

`hong({ eyes:"annoyed" })`

h: *Un moderado número de cosas* en moderación.

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: Gracias por hacer tus declaraciones convenientemente autoconsistentes.

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: *¿QUÉ?*

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: Digamos que al perro le asustan los truenos.

`hong({ body:"hands_1" });`

h: Un truco que usan los entrenadores es reproducir los truenos a bajo volumen, luego premias al perro por mantener la calma.

`hong({ body:"hands_2" });`

h: Después de un par de días el entrenador sube el volumen poco a poco hasta que el perro supere el miedo a los truenos.

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: ¡Se llama terapia de exposición!

`hong({ body:"point", eyes:"normal" });`

h: Como eres un perro también funcionaría contigo. Todos lo mamíferos tienen la misma respuesta de lucha o huida.

`hong({ body:"normal" });`

[¿Y si nos insensibilizamos *demasiado*?](#act4_harm_exposure_overboard)

[¿Y si nos exponemos a un peligro *real*?](#act4_harm_exposure_hurt)

[Soy un lobo, no un perro.](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: Y te daré amabilidad y paciencia hasta que te domestique en un lindo cachorrito.

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: Aww.

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: Nunca sabremos qué pasará si no apagas tu miedo, así que te pones a ti mismo en *reales* situaciones de peligro.

`bb({ eyes:"angry_r", body:"one_up" })`

b: Además, ¿Ignorar demasiado el peligro no nos vuelve psicópatas?

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: ¡Después vamos a premiarnos por ver porno amateur de asesinatos!

`hong({ eyes:"annoyed" })`

h: ...creo que hay una línea entre eso y un trueno.

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: ¿Pero exactamente en dónde, humano? ¿DÓNDE?

`hong({ eyes:"surprise", body:"one_up" })`

h: No lo sé, pero estas tu para ayudarme.

`hong({ eyes:"normal", body:"normal" })`

h: Trabajando y negociando contigo, vamos a dibujar esa línea.

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: Ok, pero no tengo pulgares opuestos, así que tú tendrás que dibujar.

`hong({ eyes:"annoyed" })`

h: Llevas las metáforas muy lejos...

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: Por ejemplo: ¡Saltamos de un *techo* aterrador!
{{/if}}

{{if !_.INJURED}}
b: Por ejemplo: ¡Casi saltamos de un *techo* aterrador!
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: Nah, tienes razón, se *puede* ir demasiado lejos.

`hong({ eyes:"normal" });`

h: Pero para eso sirve la terapia de exposición. Empezamos por algo pequeño, y avanzamos pequeños pasos.

h: Solo cuando nos topemos con un peligro *real* nos detenemos.

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

b: Bien, yo dibujaré la línea entre escuchar un trueno y estar parado en una tormenta con un sombrero alto y puntiagudo.

(#act4_something_else)

# act4_thanks

`_.num_thanks += 1`

{{if _.num_thanks==1}}
(#act4_thanks_1)
{{/if}}

{{if _.num_thanks==2}}
(#act4_thanks_2)
{{/if}}

{{if _.num_thanks==3}}
(#act4_thanks_3)
{{/if}}

# act4_thanks_1

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"annoyed" })`

b: Espera, ¿sin argumentos sobre lo que siento? Solo... ¿"gracias"?

`hong({ eyes:"surprise", body:"shrug" })`

h: ¡Si! gracias por preocuparte por mi.

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: ¿Estás bien?

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: Nunca me has dicho "gracias" antes.

`hong({ mouth:"smile" });`

h: Aww, mi lobito asustadizo.

(#act4_something_else)

# act4_thanks_2

h: Aunque tengas reacciones exageradas, aprecio mucho que te preocupes por mi {{_.thanks_for}}.

`bb({ eyes:"annoyed" })`

b: Espera, ¿No estás repitiendo "gracias" solo para evadir la conversación sobre las dudas?

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: Bueno, todo es complicado y no siempre tengo las respuestas.

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: No es como si la vida me diera una lista de diálogos de respuestas prefabricadas.

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: Por ahora, puedo decir gracias.

b: Bueno, gracias a ti por tener paciencia y escucharme.

`bb({ eyes:"closed" });`

b: Pequeño mamífero de pelicorto.

(#act4_something_else)

# act4_thanks_3

h: Aun si tus ladridos me asustan, Sé que solo estás protegiendo mi my {{_.thanks_for}}.

`bb({ eyes:"smile_r" });`

b: Ok, si me sigues hablando así el internet va a tener ideas extrañas sobre nosotros.

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: Hey, solo soy un chico vulnerable de instituto, y tú eres un gran lobo aterrador, ¿Qué es lo peor que podría pas--

`hong({ eyes:"normal", body:"point" });`

h: Está bien, no respondas eso.

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: Quiero asegurarme de que cumplas esa profunda necesidad humana de estar con otros...

`bb({ eyes:"sad_u" });`

b: Pero me preocupa que ni siquiera nos conozcan – al *real* nosotros - los asustaremos a todos.

`bb({ eyes:"sad" });`

{{if _.a4_fears_discussed==1}}
b: No lo sé, ya es suficiente de que yo elija que decir  ¿Qué dices tú, humano?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Volviendo a ti, humano. ¿En qué piensas?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: ¿Más dudas, humano?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Trabajemos en nuestra vida social.](#act4_alone_skills)

[Veamos si le agradamos a la gente.](#act4_alone_experiment)

[Gracias.](#act4_thanks) `_.thanks_for = "bien social";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: Podemos practicar nuestras habilidades haciendo preguntas, escuchando y empatizando, siendo vulnerables y abriéndonos, etc...

`hong({ eyes:"normal_l" });`

h: O crear mejores hábitos sociales. ¿Cómo programar tiempo con amigos o ir regularmente a reuniones?

`hong({ body:"one_up" });`

h: También podemos aprender a cómo llevar mejor los rechazos.

`hong({ eyes:"normal" });`

h: O aprender cómo saber cuándo *NO* nos están rechazando, solo están cansados o tienen u tuvieron un mal día.

```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: Hay un montón de opciones, pero "Aprender habilidades sociales"...

[¿No es *manipulación*?](#act4_alone_skills_manipulative)

[¿No nos vuelve fáciles de manipular?](#act4_alone_skills_manipulated)

[¿Y si seguimos fallando?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: ¿Los asesinos en serie no son buenos leyendo las emociones de sus víctimas como la "empatía"?

`bb({ eyes:"annoyed" });`

b: ¿Charles Manson no ganó amigos e influenció gente?

`hong({ eyes:"annoyed", body:"chin" });`

h: No, tienes razón.

h: Las "habilidades sociales" no significan nada si no nos importan *genuinamente* las personas.

`hong({ body:"normal" });`

h: Básicamente, no ser idiotas.

`bb({ eyes:"annoyed", mouth:"smile" });`

b: ¿Es lo que dice ese poster motivacional de allí?

`hong({ body:"shrug", mouth:"narrow" });`

h: "No Seas Un Idiota™"

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: Nos volveremos una alfombra de bienvenida que diga "Por Favor Y Gracias" mientras la gente limpia sus pies sobre nosotros.

`bb({ mouth:"scream", eyes:"scream" })`

b: Besaremos tantos ^culos^, ¡Parecerá que estamos usando lápiz labial marrón!

```
bb({ mouth:"normal", eyes:"normal" });
hong( body:"chin" });
```

h: Nah, tienes razón. Las "habilidades sociales" no solo son complacer a los demás, También se trata de establecer *límites.*

`hong( body:"one_up" });`

h: No puedes invitar gente a tu casa si no tienes paredes que sostengan tu casa.

```
hong( eyes:"angry", mouth:"narrow" });
bb( eyes:"annoyed", mouth:"smile" });
```

h: Por cierto, esa imagen mental del lápiz labial... *¿Eww?*

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: Podemos fallar, de hecho, vamos a fallar.

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: ¡Y eso está bien! ¡Fallando es como se aprende la primera vez!

`hong({ body:"normal", eyes:"normal" });`

h: Así que vayamos a fallar juntos ¿Si?

`bb({ eyes:"normal_r" });`

b: Está bien, creo... en el peor escenario podemos irnos del pueblo y conseguir una nueva identidad.

`bb({ eyes:"normal" });`

h: Sí, creo que actualmente cuestan como dos bitcoins.

(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: ¡Podemos intentar unos experimentos!

`hong({ body:"chin" });`

h: Podemos salir con un amigo, reconectamos con viejo compañero, o hasta tener una charla con el mesero de un café.

`hong({ body:"normal" });`

h: Talvez descubramos que somos más agradables de lo que pensamos.

`bb({ eyes:"annoyed" });`

[¿Y si las pequeñas victorias no sirven?](#act4_alone_experiment_cheap)

[¿Y si es molesto para los demás?](#act4_alone_experiment_burden)

[¡Las mini charlas no muestran al real *tú*!](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: Si ponemos una sonrisa falsa, nunca nos conectaremos realmente con nadie,

`bb({ eyes:"super_sad" });`

b: ¡Pero si nos abrimos, podrán ver lo arruinados que estamos por dentro!

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Da la vuelta.

b: Que.

`hong({body:"hands_1"})`

h: Cuando los perros muestran su amor y confianza, se vuelven vulnerables y muestran la panza.

`hong({body:"one_up"})`

h: Talvez no estamos lo suficientemente seguros como para quedar vulnerables, pero con un poco de entrenamiento...

`hong({body:"normal", eyes:"surprise"})`

h: Un día podremos mostrarle a la gente nuestro real *yo* - nuestra versión más humana, y más arruinada.

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: Voy a dar la vuelta si me das un premio.

`bb({ eyes:"normal", mouth:"normal" });`

h: No.

(#act4_something_else)


# act4_alone_experiment_cheap

b: Decirle "hola" a un mesero no es exactamente la medalla de oro en los Juegos Olímpicos de las Mariposas Sociales.

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: ¡Es por nosotros!

`hong({ body:"one_up", eyes:"annoyed" });`

h: En la arena social, ni siquiera llegamos a peso pluma, somos como... peso subatómico.

`hong({ body:"normal", eyes:"normal" });`

h: Si tenemos que comenzar por victorias pequeñas, que así sea, demos el primer paso antes de dar el milésimo.

b: ¡Si! Quizás después de decir "hola" podamos avanzar diciendo...

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: *"¿Qué hay?"*

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: *"¡No gran cosa!"*

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: Quizás el mesero solo quiera servir un poco de café, no ser una *rata de laboratorio* para ver si nuestras habilidades sociales apestan.

`bb({ eyes:"annoyed" })`

h: Bueno, si nos volvemos una molestia...

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: ¡También sería bueno aprender cómo saber cuándo lo somos!

`hong({ eyes:"normal" });`

h: Podemos aprender como proactivamente preguntarle a la gente si no están cómodos, respetar los límites de los demás.

```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h:Ya sabes, toda esa mierda de "habilidades interpersonales" que vemos en los folletos del orientador.

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: Quiero defender tus necesidades morales y volverte una mejor persona,

`bb({ eyes:"sad_d" })`

b: Pero se siente como si en lo profundo, ya estamos esencialmente... rotos.

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: Y no me digas que no estamos arruinados, saltamos de un *techo*.
{{/if}}

{{if !_.INJURED}}
b: Y no me digas que no estamos arruinados, casi saltamos de un *techo*.
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

{{if _.a4_fears_discussed==1}}
b: No lo sé, ya es suficiente de que yo elija que decir, ¿Qué dices tú, humano?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Volviendo a ti, humano. ¿En qué piensas?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: ¿Más dudas, humano?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Si estamos rotos, reparémonos.](#act4_bad_fix)

[Si estamos rotos, aceptémoslo.](#act4_bad_accept)

[Gracias.](#act4_thanks) `_.thanks_for = "bienestar moral";`

# act4_bad_fix

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: Creemos mejores hábitos poco a poco, tengamos nuestra vida en mejor equilibrio con lo que queremos,

`hong({body:"one_up"});`

h: Y si lo necesitamos, podemos conseguir ayuda profesional, un terapeuta o consejero.

`hong({body:"normal"});`

h: Hay muchas formas de repararnos.

[¿Y si no nos arreglamos completamente?](#act4_bad_fix_cant)

[¿Y si nos arreglamos demasiado?](#act4_bad_fix_too_much)

[No podemos pagar ayuda profesional.](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: Nah, tienes razón.

h: No podemos arreglarnos del todo.

`bb({mouth:"scream", eyes:"scream_sad"});`

b: ¡Ahhh, lo sabía, siempre estaremos rotos!

`hong({eyes:"surprise"});`

h: Pero podemos estar *menos* rotos.

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: Las cicatrices se curan con el tiempo, pero nunca se desaparecerán. Y eso está bien.

`bb({eyes:"annoyed_r"});`

b: Creo que si. Además,

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: Las cicatrices son *sexys.*

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: Por favor no hagas eso.

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: Duele admitirlo pero... una parte de mi *quiere* mantener este desorden.

`bb({ eyes:"angry" })`

b: Digo, ¿No seríamos aburridos sin él?

`bb({ eyes:"sad_r", body:"one_up" })`

b: Sin el desorden, ¿Nuestro arte no se volvería gris y cenizo?

`bb({ eyes:"sad_u", body:"two_up" })`

b: Sin el desorden, ¿No seriamos incapaces de conectar con nuestros amigos que tengan el mismo desorden?

`bb({ eyes:"sad", body:"chest" })`

b: Si estuviéramos siempre felices con la vida, ¿no pararíamos de querer hacer cosas buenas cosas por el mundo?

`hong({ MOUTH_LOCK:true })`

h: ...

h: Hasta tenemos miedo de... "quedarnos sin miedo"...

h: No creo que vayamos a quedemos sin miedos.

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: ¡Oh, si! ¡Whew! ¡Que Alivio!

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: "Doc, me da ansiedad estar pagando 100 dólares la hora solo para escucharte preguntar *¿Eso como te hace sentir?*"

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b: "Mm-hmm. ¿Y eso como te hace sentir?"

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: Nah, es una preocupación totalmente razonable.

`hong({ eyes:"annoyed", mouth:"sad" });`

h: Y genuinamente apesta que la asistencia médica no esté disponible para todo el mundo.

`hong({ eyes:"normal", mouth:"normal" });`

h: Todavía quedan otras opciones:

`hong({ body:"chin" })`

h: Grupos de ayuda, terapia online, estudiantes/centros de salud gratuitos...

`hong({ body:"hands_1" })`

h: Crear hábitos como la meditación, buenos sueños, hablar regularmente con amigos, aprender nuevas cosas.

`hong({ body:"hands_2" })`

h: Ir a librerías y buscar pedir libros sobre psicoterapias demostradas...

`hong({ body:"one_up" })`

h: ¡Hay una lista llena de recursos al final de este juego!

```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: Bueno, esa cuarta pared no duró mucho.

`hong({ body:"point" });`

h: Algunas cosas son más importantes que la línea narrativa. Como la salud mental.

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: Digo, ¿eso no es lo que dicen los terapeutas? ¿Acepta tus emociones, hasta las negativas?

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: Espera.

["Aceptar" como *¿rendirse?*](#act4_bad_accept_give_up)

["Aceptar" como *¿aprobar?*](#act4_bad_accept_approve)

["Aceptar" como *¿tomar literalmente?*](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: Do you think Martin Luther King would've said, "Shucks we can't sit in the front of the bus, let's just *accept* it?"

`bb({ eyes:"angry_r", body:"two_up" });`

b: ¿Por qué el complejo de industria de la autoayuda cree que usar la bandera blanca es *sabiduría profunda*?

`bb({ eyes:"annoyed", body:"normal" });`

h: Creo que los terapeutas dicen "aceptar" las cosas malas como: reconocer que están ahí y son difíciles de cambiar,

h: No necesariamente rendirse y comprometerse al cambio.

`bb({ eyes:"suspect" });`

b: Después los terapeutas dicen "reconocer", no "aceptar".

`hong({ body:"chin", eyes:"annoyed" });`

h: Si, pensándolo bien, "aceptar" es un poco confuso.

`bb({ eyes:"closed", mouth:"narrow" });`

b: Si, "reconozco" eso.

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: ¿Como si fuera bueno estar rotos? ¡No!

`bb({ eyes:"angry_r", body:"one_up" });`

b: ¡Todos esos escritores de Hollywood que romantizan las enfermedades mentales son unos idiotas!

`bb({ eyes:"angry", body:"two_up" });`

b: ¡Tener un desorden mental *apesta*! ¡Le arrebata la vida a la gente! ¡¿Cómo podemos "aceptar" eso?!

`bb({ body:"normal" });`

h: Creo que los terapeutas dicen "aceptar" tus emociones como: ser paciente con ellas.

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Como luchar contra arenas movedizas, solo te hace hundirte más rápido, la solución es tratar de recostarse pacientemente,

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: Luchar contra ti, mi miedo, me hizo saltar de un techo.
{{/if}}

{{if !_.INJURED}}
h: Luchar contra ti, mi miedo, casi me hizo saltar de un techo.
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: En lugar de pelear, la solución es hacer lo que estamos haciendo ahora, pacientemente estar el uno con el otro.

`bb({ eyes:"annoyed" });`

b: Deberían decir eso en vez de una palabra problemática como "aceptar".

`hong({ body:"chin", eyes:"annoyed" });`

h: Si, pensándolo bien, "aceptar" apesta.

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: No acepto "aceptar".

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: ¡Pero ya *sabemos* que no puedes tomarme literalmente!

`bb({ eyes:"sad_u", body:"two_up" });`

b: ¡Todo nuestro *problema* es que quiero ayudarte, pero apesto usando las palabras!

`bb({ eyes:"sad", body:"normal" });`

h: Creo que los terapeutas dicen "aceptar" tus emociones como "No las combatas o las ignores."

`hong({ eyes:"surprise", body:"one_up" });`

h: Para escucharte, trabajar *contigo*, pero tomar lo que dices como verdad 100% absoluta.

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: Los terapeutas deberían decir *eso* en lugar en una palabra confusa y vaga como "aceptar".

`hong({ body:"chin", eyes:"annoyed" });`

h: Supongo que también apestan usando las palabras.

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

{{if _.a4_fears_discussed==1}}
h: ¿Bueno, algo más de lo que quieras hablar?
{{/if}}

{{if _.a4_fears_discussed==2}}
h: Entonces, ¿algo más en tu duro corazón?
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[Tengo miedo de ser herido.](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true}}
[Tengo miedo de quedar solo.](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true}}
[Tengo miedo de ser una mala persona.](#act4_bad)
{{/if}}

[Nah, estoy bien por ahora.](#act4c_prelude)

# act4_something_else_2

h: Ok, creo que ya hablamos de todas las dudas.

b: Si, solo hay tres miedos.

h: Sip, exactamente tres.

b: Conveniente.

(#act4c)

# act4c_prelude

h: Buena charla equipo.

(#act4c)

# act4c

```
Game.clearText();
music(null,{fade:3});
bb({body:"normal", eyes:"normal", mouth:"normal", MOUTH_LOCK:true},0);
hong({body:"normal", eyes:"normal", mouth:"normal"},0);
```

b: ...

`hong({MOUTH_LOCK:true},0)`

h: ...

`bb({eyes:"annoyed_d"})`

b: Ya sabes, esto no es una especie de *juego.*

`bb({eyes:"angry_d", body:"one_up"})`

b: Construir relaciones sanas con tus emociones no es como tocar botones en una pantalla.

`bb({eyes:"sad", body:"normal"})`

b: ¿En realidad *podemos* lograrlo?

b: ¿*Podemos* trabajar juntos, como un equipo?

`hong({eyes:"sad", body:"one_up"})`

h: Bueno,

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

a: h-hola...

```
Game.clearText();
publish("act4-in-2");
music('campus', {volume:0.5, fade:1});
```

(...2101)

(#act4d)

# act4d

`Game.WORDS_HEIGHT_BOTTOM = 221;`

`publish("act4", ["alshire", 0]);`

a: ¿P-puedo comer aquí?

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm"}}
s: ¿*Este* es tu crush? ¿Por qué se sienta solo como un psicópata asesino serial?
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ¿Le preguntas a tu crush si puedes sentarte con él? ¿No ves lo necesitado que suena eso?
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: ¿*Este* es tu crush? ¡Estamos interrumpiendo su paz! ¡Lo estamos molestando!
{{/if}}

`publish("act4", ["alshire", 2]);`

a: D-digo, está bien si... si no quieres...

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[Espera, ¿no te vi en la fiesta?](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[Está bien, siéntate.](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[Lo siento, necesito tiempo a solas.](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: Si, estabas en el sofá, esa vez que...

`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight"}}
h2: Sufrí un ataque de pánico y golpeé a la anfitriona.
{{/if}}

{{if _.a2_ending=="flight"}}
h2: Sufrí un ataque de pánico y salí llorando.
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Espera humano, creo que la estamos incomodando.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: ¡Ah, no quería meterte en aprietos!

`publish("act4", ["hong_to_alshire",4]);`

h2: Solo recordaba una cara conocida, eso es todo.

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: ¡AHHHHH LO SABÍA! ¡ES UN PSICÓPATA PELIGROSO IMPULSADO POR EL PÁNICO!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ¡AAHHH LA PRIMERA IMPRESIÓN QUE LES DIMOS FUE "VIMOS TU TRAUMA"! ¡NOS ODIA!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AAAHHH HICIMOS QUE ALGUIEN RECORDARA UN EVENTO TRAUMÁTICO. NUESTRA MERA PRESENCIA HIERE A  LOS DEMÁS.
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Espera humano, parece incómoda.

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: ¡Ah, sin presiones por supuesto!

`publish("act4", ["hong_to_alshire", 4]);`

h2: Puedes sentarte aquí si quieres hacerlo.

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: ¡ESTÁ SIENDO *DEMASIADO* AMISTOSO! ¡COMO TED BUNDY, EL ASESINO SERIAL!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ¡SOLO ESTÁ ACTUANDO! ¡NADIE QUERRÍA ESTAR CERCA DE NOSOTROS!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: A¡AHHH SIEMPRE HACEMOS SENTIR INCÓMODOS A LOS DEMÁS! ¡SOMOS UNA MANCHA FEA EN LA TIERRA!
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Espera humano, creo que la estamos incomodando.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: ¡Ah, no quería ser tan rudo!

`publish("act4", ["hong_to_alshire", 6]);`

h2: Solo necesito tiempo para procesar mis emociones, por favor no lo tomes como un rechazo personal.

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: ¡¿QUE PENSAMIENTOS TORCIDOS Y ENFERMOS ESTÁN PROCESANDO?! ¡¿QUÉ DESEOS OSCUROS LLENAN EL CORAZÓN DE ESTE PSICÓPATA?!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ¡NOS RECHAZÓ PERSONALMENTE! ¡NUNCA SEREMOS AMADOS!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: ¡INTERRUMPIMOS SU PROCESO EMOCIONAL! ¡AHORA ESTARÁ TRAUMADO PARA SIEMPRE Y ES TODO CULPA NUESTRA!
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: CORRE CORRE CORRE CORRE CORRE CORRE CORRE CORRE CORRE

```
Game.clearText();
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["alshire", 10]);
sfx("pop");
```

(...1001)

```
publish("act4", ["alshire", 11]);
sfx("alshire_run");
```

(...2601)

```
publish("act4-out-3");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
```

(...1201)

`publish("act4-jumpcut-hong");`

h: Huh, eso fue raro, me pregunto que pasaba en su cabeza.

`publish("act4", ["hong_closer", 2]);`

h: Bueno, ¿Qué decías?

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: Uh, lo olvidé. ¿Algo sobre el trabajo en equipo?

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: Dicen que puedes "hacer las paces" con tus emociones como si tus emociones fueran "criminales de guerra".

`publish("act4", ["bb_closer", 7]);`

b: ¡Pero quiero hacer *más* que solo las paces, quiero que seamos *aliados!*

`publish("act4", ["bb_closer", 3]);`

b: Quiero ser un buen perro guardián. Algo así como la sed y el hambre te alarman tus necesidades físicas.

`publish("act4", ["bb_closer", 8]);`

b: Yo quiero ser la alarma de tus necesidades *psicológicas* - tu necesidad de seguridad, compañía y bondad.

`publish("act4", ["bb_closer", 1]);`

b: Pero... apesto en mi trabajo, así que necesito que me entrenes.

`publish("act4", ["bb_closer", 4]);`

b: No soy "completamente valido" ni "completamente irracional". Yo solo... trato de dar lo mejor. Así que por favor,

`publish("act4", ["bb_closer", 30]);`

b: ¡Ayúdame a ayudarte!

`publish("act4", ["bb_closer", 6]);`

b: Aunque, enseñarle a un perro viejo trucos nuevos toma tiempo, quizás años.

`publish("act4", ["bb_closer", 3]);`

b: Y algunas veces voy a recaer y volveré a mis viejos hábitos.

`publish("act4", ["bb_closer", 2]);`

b: Le ladraré a las sombras, te asustaré con palabras. Aveces te mostraré imágenes intrusivas de... cosas.

`publish("act4", ["bb_closer", 9]);`

b: ¡Lo siento! ¡Soy un perro maltratado del refugio! ¡Los perros maltratados hacen popo en tu cama algunas veces!

`publish("act4", ["bb_closer", 4]);`

b: Pero si tienes paciencia conmigo... y te sientas a mi lado...

`publish("act4", ["bb_closer", 8]);`

b: Puede que un día domes este lobo.

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Buen perro.](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[Buen humano.](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

# act4f-pat-hong

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 13]);
```

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...6501)

`publish("act4", ["bb_closer", 15]);`

(...1001)

(#act4f)

# act4f-pat-bb

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 10]);
```

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...6501)

`publish("act4", ["bb_closer", 12]);`

(...1001)

(#act4f)

# act4f

```
Game.FORCE_CANT_SKIP = false;
publish("act4", ["bb_closer", 16]);
publish("act4", ["hong_closer", 5]);
```

{{if _.fifteencigs}}
b: AAAAA SIGUES COMIENDO SOLO, QUINCE CIGARRILLOS AAAAA
{{/if}}

{{if _.parasite}}
b: AAAAA SIGUES SI SER PRODUCTIVO MIENTRAS COMES, SOMOS PARACITOS DE LA SOCIEDAD AAAAA
{{/if}}

{{if _.whitebread}}
b: AAAAA ESTÁS COMIENDO MÁS PAN BLANCO AAAAA
{{/if}}

```
publish("act4", ["bb_closer", 18]);
publish("act4", ["hong_closer", 6]);
sfx("yaps", {volume:0.6});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 205;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: YAP YAP YAP YAP YAP

(#credits)
