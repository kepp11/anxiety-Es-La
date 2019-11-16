# act1

```
SceneSetup.act1();
```

(...300)

n: Y ESTA ES SU ANSIEDAD

n: _TU_ ERES LA ANSIEDAD

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: ¡Oh, hola! ¿Aquí otra vez?

`hong({eyes:"0_neutral"})`

n: TU TRABAJO ES PROTEGER A TU HUMANO DEL *PELIGRO*

`bb({eyes:"look", mouth:"small_lock"})`

n: DE HECHO, REJUGAR ESTE JUEGO LO ESTÁ PONIENDO EN *PELIGRO* JUSTO AHORA

n: ¡RÁPIDO! ¡DEBES PREVENIRLO!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: ¡Humano! ¡Escucha, estamos en peligro! ¡El jugador...

[...Va a torturarnos otra vez!](#act1_replay_torture)

[...No encontrará un final alternativo!](#act1_replay_alternate)

[...Tendrá ludodisonancia narrativa!](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight"}}
b: ¡Hará que nos hagamos bolita y lloremos!
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight"}}
b: ¡Nos hará destruir tu teléfono por un ataque de pánico!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight"}}
b: ¡Hará que *NO* golpeemos al anfitrión de la fiesta!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight"}}
b: ¡Nos hará golpear al anti-villano comprensivo de la fiesta!
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: Almenos no vamos a saltar del techo esta v--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway"}}
b: NOS HARÁ SALTAR DEL TECHO.
{{/if}}

`bb({body:"fear"});`

b: TODAS ESAS COSAS TERRIBLES NOS PASARÁN Y LUEGO--

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Bueno, la historia *en si* es la misma, pero cada capítulo tiene dos posibles finales, y todas las opciones de diálogo alternati--

`bb({body:"fear"});`

b: ¡El jugador se decepcionará, cerrará nuestra pestaña, borrará nuestro software, y luego--

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: ...¿que?

`bb({eyes:"normal"});`

b: La historia se trata de como tienes la *opción* de construir una relación *sana* con tus miedos,

`bb({eyes:"normal_right"});`

b: Pero volver a jugar te deja la misma historia, lo que implica que tus *opciones* no importan,

`bb({eyes:"narrow_eyebrow"});`

b: Mostrando una contradicción entre el mensaje del juego y las mecánicas,

`bb({eyes:"fear"});`

b: Y desmantelando el tejido de este universo narrativo,

`bb({body:"fear"});`

b: Por lo--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: ¡¡MORIREMOOOOOOOOOS!! 

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.clearText();
```

(...1001)

```
bb({body:"laugh"});
hong({body:"laugh"});
Game.clearText();
sfx("laugh");
```

(...5001)

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"0_sammich"});
```

h: Ok, volvamos al personaje.

```
Game.clearText();
```

n4: (DEJA QUE _TU_ ANSIEDAD *BLAH BLAH BLAH* LO MAS PARECIDO A COMO TU MIEDO *BLAH BLAH BLAH* YA SABES)

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)



# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Genial, el lobo volvió. Faaantástico.

`hong({eyes:"0_neutral"})`

n: TU TRABAJO ES PROTEGER A TU HUMANO DEL *PELIGRO*

`bb({eyes:"look", mouth:"small_lock"})`

n: DE HECHO, ESE *SÁNDWICH* LO ESTÁ PONIENDO EN *PELIGRO* JUSTO AHORA

n: ¡RÁPIDO! ¡DEBES PREVENIRLO!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: ¡HUMANO! ¡ESCUCHA, ESTAMOS EN PELIGRO! ¡EL PELIGRO ES...

`bb({body:"squeeze"})`

n4: ¡DEJA QUE _TU_ ANSIEDAD JUEGUE! ELIGE LO MÁS PARECIDO A LO QUE _TU_ MIEDO TE DIGA)

(#act1_normal_choice)

# act1_normal_choice

[¡Estamos comiendo solos! ¡Otra vez!](#act1a_alone) `bb({body:"squeeze_talk"})`

[¡No somos productivos mientras comemos!](#act1a_productive) `bb({body:"squeeze_talk"})`

[¡Ese pan blanco nos hace daño!](#act1a_bread) `bb({body:"squeeze_talk"})`

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: ¿No sabes que la soledad está asociada con la muerte prematura tanto como fumar 15 cigarrillos al día?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Por Holt-Lunstad 2010, en la revista PLoS Med)

`hong({eyes:"0_annoyed"})`

h: Um, gracias por citarla pero--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Lo que quiere decir que si en *este momento* no hablamos con alguien--

`bb({body:"panic"})`

b: ¡¡MORIREMOOOOOOOOOS!!

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: HAS USADO *MIEDO A ESTAR SOLO*

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: ¡Saca tu laptop y busca un trabajo ahora mismo!

`hong({eyes:"0_annoyed"})`

h: Um, prefiero no tener migas de pan en mi teclad--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Si no contribuimos al cuerpo de la sociedad entonces somos unos paracitos de la sociedad!

b: El cuerpo de la sociedad irá con el doctor de la sociedad por un medicamento para matar a sus paracitos de la sociedad y luego--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡¡MORIREMOOOOOOOOOS!!

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: HAS USADO *MIEDO A SER UNA MALA PERSONA*

(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: ¿Pero esos estudios no--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: El trigo procesado espesará la glucosa en nuestra sangre y tendrán que amputar todas nuestras extremidades y--

`bb({body:"panic"})`

b: ¡¡MORIREMOOOOOOOOOS!!

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: HAS USADO *MIEDO A SER HERIDO*

(#act1b)

# act1b

n: ¡ES SÚPER EFECTIVO!

`bb({mouth:"smile", eyes:"smile"});`

b: ¿Lo ves humano? ¡Yo soy tu leal lobo guardián!

`bb({body:"pride_talk"});`

b: ¡Confía en tus instintos! ¡Tus miedos siempre son válidos!

`bb({body:"pride"});`

n: LLEVA LA BARRA DE ENERGÍA DE TU HUMANO A CERO

n: PARA PROTEGER SUS NECESIDADES FÍSICAS + SOCIALES + MORALES PUESDES USAR:

n: MIEDO A *SER HERIDO* #harm#

n: MIEDO A *ESTAR SOLO* #alone#

n: MIEDO A *SER UNA MALA PERSONA* #bad#

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (UN CONSEJO: ELIJE LAS OPCIONES QUE TOQUEN PERSONALMENTE TUS MÁS PROFUNDOS MIEDOS)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: Quizás deba revisar mi teléfono.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: PROTEGE A TU HUMANO

n: DEL MUNDO. DE OTRAS PERSONAS. DE SI MISMO.

n: BUENA SUERTE

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: ROUND ONE: *FIGHT!*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: Huh, las publicaciones de Facebook dicen que hay una fiesta este fin de semana.

`bb({eyes:"uncertain"});`

b: ¿No será esa loca que hace una fiesta *cada* semana?

`bb({eyes:"uncertain_right"});`

b: ¿Que vacío está tratando de llenar? ¡Debe estar profundamente arruinada por dentro!

`hong({eyes:"surprise"});`

h: ...y tengo una invitación?

`bb({eyes:"fear", mouth:"normal"});`

b: Oh bien, entonces

[¡Di que si! ¡O moriremos de soledad!](#act1c_loner)

[¡No! ¡Está lleno de drogas venenosas!](#act1c_drugs)

[Ignóralo, solo deprimimos las fiestas.](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: ¡Quince cigarrillos al día, humano! ¡Quince!
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: Y nadie irá a tu funeral, tirarán tus restos al mar, nos comerá una ballena,
{{/if}}

{{if !_.fifteencigs}}
b: ¡Y seremos CACA DE BALLENA!
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: ¡Así que sí! ¡Debemos ir a esa fiesta!
{{/if}}

{{if _.parasite}}
b: Solo lleva tu laptop, así podemos buscar trabajo y no ser un paracito de la sociedad.
{{/if}}

{{if _.whitebread}}
b: Estaremos bien mientras no sirvan PAN BLANCO
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: DIOS, si eso hace que te calles, bien.

h: Aceptaré.

{{if _.whalepoop}}
b: ¡Caca de ballena, humano! ¡Caca de ballena!
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: O aún peor... PAN BLANCO
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: ¡Tendremos una sobredosis de metanfetamina y pan blanco tan grande que no podrán meter nuestro cuerpo gordo en el horno de cremación!
{{/if}}

{{if !_.whitebread}}
b: ¡Tendremos una sobredosis de tantas drogas que nuestro enterrador se preguntará como es que nuestro cuerpo *ya estaba* embalsamado!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: Además, no podemos ir ¡Tenemos que trabajar o seremos un horrible paracito de la sociedad!
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: DIOS, si eso hace que te calles, bien.

h: No iré.

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: Todo lo que podemos hacer irnos a una esquina a llorar por como la soledad es tan mortal como 15 cigarrillos al día.
{{/if}}

{{if _.parasite}}
b: Todo lo que hacemos en las fiestas es preocuparnos porque deberíamos estar siendo productivos.
{{/if}}

{{if _.whitebread}}
b: Todo lo que hacemos es preocuparnos por como la comida dañina va a matarnos.
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: Seh, me pregunto por qué...

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Así que si vamos los haremos sentir mal a todos... ¡Pero si rechazamos su invitación tambienlos haremos sentir mal!

`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: TODO LO QUE HACEMOS ES HACER SENTIR MAL A LA GENTE, DEBERÍAMOS SENTIRNOS MAL

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: Ugh. Si eso hace que te calles, bien.

h: Ignoraré la invitación.

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: Como sea, Facebook es demasiado, necesito algo más relajante, que produzca menos ansiedad.

`hong({eyes:"neutral"});`

h: ¿Qué hay en twitter?

`bb({eyes:"look"});`

[¡Oh no, que historia tan horrible!](#act1d_news)

[¡Oh no, ese tweet habla de *nosotros*!](#act1d_subtweet)

[Hey, un GIF de un gatito bebiendo leche](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: Vaya, están pasanso cosas tan horribles, se siente como si el mundo estuviera ardiendo...

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: Como si fuera el fin de todo, como si cada cosa estuviera muriendo y no podamos hacer nada para evitarlo.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: ¡Retweetemos esa historia!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.badnews=true`

```
music('battle', {volume:0.5});
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Ok, voy a retweetearla, solo tranquilízate!

`hong({mouth:"neutral", eyes:"annoyed"});`

h: Dejemos eso ¿Qué tal snapchat?

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: ¡Es un subtweet! ¡Un vil subtweet!

`hong({eyes:"annoyed"});`

h: ¿…O talvez no?

`bb({eyes:"narrow", mouth:"small"});`

b: ¿Pero si todos estuvieran hablando de nosotros a nuestras espaldas?

h: Ellos no--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: NUESTRA ESPALDA, BAJO NUESTRAS NARICES

`hong({eyes:"sad", mouth:"sad"});`

h: No l--

`bb({eyes:"narrow", mouth:"small"});`

b: Pero *¿Si lo hicieran?*

h: N--

`bb({eyes:"narrow_eyebrow"});`

b: ¿Qué tal *Si lo hicieran*?

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.subtweet=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Muy bieeen... probemos con snapchat.

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: Mira que tierno, Voy a retweetearlo, creo q--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: LOS GATOS NO PUEDEN DIGERIR LA LECHE Y SOMOS PERSONAS HORRIBLES POR APOYAR EL ABUSO ANIMAL

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("18p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Muy bieeen... probemos con snapchat.

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: Huh, fotos de anoche. Conque *así* son esas fiestas.

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: Uf, parece demasiado lleno para mi ansiedad.

h: Talves no debí aceptar esa invitación...

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[¡¿Y cambiar tu respuesta como un imbécil?!](#act1e_yes_dontchange)

[¡Cambia tu respuesta, es demasiada gente!](#act1e_yes_changetono)

{{if _.subtweet}}
[Definitivamente ese tweet hablaba de nosotros.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[¡Espera, retweeteamos sin revisar los hechos!](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[¿Ya sabes que tienes una postura horrible?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¿Contaban con nosotros para estar en esa fiesta y ahora vamos a traicionar su confianza? ¡¿Acaso quieres morir solo?!

{{if _.fifteencigs}}
b: QUINCE. CIGARRILLOS.
{{/if}}

{{if _.whalepoop}}
b: CACA. DE. BALLENA.
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Cállate! ¡Cállate! ¡Si iré a esa fiesta!

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¿Has escuchado sobre las estampidas humanas?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: En 2003, en el Club nocturno Rhode Island hubo un incendio y el pánico hizo que la gente se atascara en las salidas y 100 personas murieron quemadas-

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¿ACASO QUIERES QUE ESO NOS PASE?-

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: Recházala Recházala Recházala Recházala Recházala Recházalala RECH-


```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Cállate! ¡Cállate! ¡Cambié de opinión! ¡Dios!

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Hm… parece que se divierten.

h: Talvez no debí rechazar esa invitación...

`bb({mouth:"normal", eyes:"normal"});`

[¡¿Y cambiar tu respuesta como un imbécil?!](#act1e_no_dontchange)

[¡Cambia tu respuesta! ¡No mueras solo!](#act1e_no_changetoyes)

{{if _.subtweet}}
[Definitivamente ese tweet hablaba de nosotros.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[¡Espera, retweeteamos sin revisar los hechos!](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[¿Ya sabes que tienes una postura horrible?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: ¡Todos estaban contando con nosotros!

b: ...Para que los dejemos solos y puedan tener una buena fiesta sin una asquerosa ^mierda^ {{if _.whitebread}}Mastica-pan-blanco{{/if}} como nosotro--


```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Cállate! ¡Cállate! ¡Mi respuesta sigue siendo no!

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡La soledad crónica aumenta nuestros niveles del cortisol así como el riesgo de enfermedad cardiovascular y ataques al corazón!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: QUINCE CIGARRILLOS.
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Cállate! ¡Cállate! ¡Cambiaré mi respuesta a si! ¡Dios!

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Todos nuestros tweet problemáticos están volviendo al gallinero!

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: ¡Nos llamarán, cancelarán y nos arrastrarán con una soga a caballo por la autopista de la información!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡¿Por qué tienes que ser así?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Estamos difundiendo desinformación! ¡Estamos destruyendo la confianza en la prensa libre!

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Seremos la razón de que el fascismo surja de los escombros de la democracia!

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
_.factcheck = true;
```

h: ¡¿Por qué tienes que ser así?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡¿Acaso quieres tener una columna de pretzel?! ¡Deja de encorvarte contra tu pantalla!

```
bb({body:"meta"});
```

b: Eso también va para ti.

```
bb({body:"normal", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡¿Por qué tienes que ser así?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Hm… parece que se divierten.

h: Talvez no debí ignorar esa invitación...

`bb({mouth:"normal", eyes:"normal"});`

[ignórala, aún somos unos arruina fiestas.](#act1e_ignore_continue)

[¡Acéptala!](#act1e_ignore_changetoyes)

[¡Recházala!](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: ¿No es un poco grosero seguir ignorándolos?

`bb({eyes:"normal_right"});`

b: Bueno, otras personas *nos* ignoran, así que...

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: Estamos a mano.

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: ¿Estas... dejando que me divierta?

b: Bueno, la soledad *puede* matarnos.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: Es demasiada gente. Las multitudes son peligrosas.

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Hey. Nuevas notificaciones de Tinder.

`bb({eyes:"uncertain"})`

b: ¿Qué? ¿Esa aplicación de citas?

`hong({eyes:"annoyed"})`

h: No es una aplicación de citas, solo es una forma de conocer gen--

`bb({eyes:"narrow"})`

b: Es una aplicación de citas.

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: ¡Oh, tengo una cita! ¡Y parece adorable!

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: Por favor, no me arruines est--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: PELIGRO PELIGRO PELIGRO PELIGRO PELIGRO PELIGRO PELIGRO PELIGRO

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[Estamos siendo usados por otras personas.](#act1f_used_by_others)

[Estamos usando a las otras personas.](#act1f_using_others)

[TU CITA ES UN ASESINO SERIAL](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: Las citas aleatorias pueden llenar el vacío aquí abajo,

b:Pero nunca llenarán el vacío...

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: Que está *aquí*.

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: El punto es que VAMOS A MORIR SOLOS

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b:¿Qué crees que los genitales de otras personas son pokemon para tu colección?

```
bb({body:"sing", eyes:"pretty", mouth:"shut"});
music("pokemon");
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

```
Game.FORCE_TEXT_DURATION = 1000;
Game.FORCE_NO_VOICE = true;
```

b: ♫ (Opening de pokemon)-

(...5600)

```
bb({mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2400;
```

b: ♫ Tengo que ser, un degenerado-

(...500)

```
bb({eyes:"narrow", mouth:"small"});
Game.FORCE_TEXT_DURATION = 2100;
```

b: ♫ más ^put^o que nadie más-

(...1500)

```
bb({eyes:"pretty"});
Game.FORCE_TEXT_DURATION = 2300;
```

b: ♫ Tetas enormes, culo carnoso  

(...500)

```
bb({eyes:"fear", mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2000;
```

b: ♫ ¡Una gran ^Verga^ sudorosa!-

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 1000;
```

b: ♫ ¡PERVER-MON! TIENES QUE-

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: El punto es que somos unos manipuladores.

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`_.pokemon=true`

(#act1g)

# act1f_killer

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.whitebread}}
b: ¡Te encerrará en un pozo y te forzará a comer pan blanco para engordarte y poder usar tu piel como abrigo de cuero!
{{/if}}

{{if _.parasite}}
b: Te aporreará con un podómetro y te dirá "DEBERÍAS SER MÁS PRODUCTIVO, ^MALDITO^ PARACITO"
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: ¡Desgarrará tu carne y hará confeti sangriento con ella, convertirá tus entrañas en serpentinas y mezclará tu sangre en un tazón de jugo!
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: ¡¿TANTO por una invitación a una fiesta?!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.serialkiller=true`

(#act1g)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
music(false);
```

h: ...

(...500)

h: Odio tanto este juego.

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"La soledad nos matará"... {{/if}}
{{if _.parasite}}"Somos un paracito de la sociedad"... {{/if}}
{{if _.whitebread}}"No comas eso, te matará"... {{/if}}
{{if _.subtweet}}"Están hablando a nuestras espaldas"... {{/if}}
{{if _.badnews}}"El mundo se está quemando"... {{/if}}
{{if _.hookuphole}}"Vamos a morir solos"... {{/if}}
{{if _.serialkiller}}"Es un asesino serial"... {{/if}}
{{if _.catmilk}}"Los gatos no pueden digerir la leche"... {{/if}}
{{if _.pokemon}} Una parodia horrible de una canción... {{/if}}

h: Solo quiero vivir mi vida.

h: Solo quiero ser libre de todo este... sufrimiento.

`bb({eyes:"look_sad"});`

b: Hey... Humano...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: Todo Estará bien.

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: Como tu leal lobo guardián siempre tendré un ojo en el peligro y haré mi mayor esfuerzo para cuidarte.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b:Lo prometo.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Ultima app. Instagram. ¿Qué me tienes?

`hong({eyes:"sad"});`

h: Y... más fotos de la fiesta.

`hong({mouth:"sad"});`

h: Todos se ven tan felices. Libres de preocupación. Libres de ansiedad.

`hong({mouth:"anger"});`

h: Ugh ¿Por qué no puedo ser como ellos? ¿Por qué no puedo ser *normal?*

`bb({eyes:"normal_right"});`

b: Hablando de fiestas, sobre la de este fin de semana. Esta es mi DECISIÓN FINAL:

`bb({eyes:"normal"});`

[Mejor vamos.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[Mejor no vamos.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: Mejo--

`hong({body:"2_you"});`

h: *TU.*


```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: *VETE A LA ^MIERDA^.*

(...500)

b: ¿Q--

(...1500)

`bb({eyes:"wat_2"});`

b: ¿Qué?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: Yo *voy* a ir a esa fiesta,

{{if _.act1g=="go"}}
h: Y no porque *TU* quieras, sino porque *YO* quiero.
{{/if}}

{{if _.act1g=="dont"}}
h: Y precisamente porque tú no quieres
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: Tu NO tienes control sobre mí

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: Ahora cállate mientras como este delicioso sándwich en ^maldita^ paz.

`hong({body:"2_sammich_eat"});`

(...601)

```
sfx("sandwich");
hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})
```

(...601)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"normal_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

[AHHH VAMOS A MORIR](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHH TODOS NOS ODIAN](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHH SOMOS HORRIBLES PERSONAS](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH VAMOS A MORIR AAAAAHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH TODOS NOS ODIAN AAAAAHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH SOMOS PERSONAS HORRIBLES AAAAAHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "bad");
```

(...2500)

(#act1i)

# act1i

```
bb({mouth:"smile_lock", eyes:"smile", body:"normal"});
music('battle', {volume:0.5});
```

n: FELICIDADES

(...500)

n: HAS PROTEGIDO EXITOSAMENTE LAS NECESIDADES FÍSICAS + SOCIALES + MORALES DE TU HUMANO

n: ¡SOLO MIRA LO AGRADECIDO QUE ESTÁ!

(...500)

n: CON SU ENERGÍA EN CERO AHORA PUEDES CONTROLAR SUS ACCIONES DIRECTAMENTE

`bb({mouth:"smile", eyes:"normal"});`

n: ELIGE TU ÚLTIMO MOVIMIENTO

`bb({mouth:"small_lock", eyes:"fear"});`

n: *ACÁBALO*

[{LUCHAR: ¡Deshazte de tu estresante teléfono!}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{HUIR: ¡Hazte bolita y llora!}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: ¡Tu teléfono te está provocando un ataque de pánico!

`bb({eyes:"anger"})`

b: ¡Zuckerberg y compañía te están arrebatando tu salud mental para obtener dinero capitalista!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Deshazte de tu teléfono! ¡Destrúyelo! ¡MÁTALO!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO M--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: ¡El mundo entero está lleno de peligro!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Como el armadillo! ¡Enróllate como autodefensa!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: ENRÓLLATE Y LLORA ENRÓLLATE Y LLORA ENRÓLLATE Y LLORA ENRÓLLATE Y LLORA ENRÓLLATE Y LLORA ENRÓLLATE Y--

(#act1j)

# act1j

`SceneSetup.act1_outro()`