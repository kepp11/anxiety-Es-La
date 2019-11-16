# act2

`SceneSetup.act2();`

{{if _.badnews && !_.factcheck}}
(#act2-preamble-news1)
{{/if}}

{{if _.badnews && _.factcheck}}
(#act2-preamble-news2)
{{/if}}

{{if _.catmilk}}
(#act2-preamble-cat)
{{/if}}

(#act2-preamble-tinder)


# act2-preamble-news1

```
publish("act2",["dee",3]);
```

s: ¿Oiste de esa "historia" sobre esa cosa horrible que pasó en alguna parte?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: h-hola...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Ugh, odio las noticias. Son solo sensacionalismo y títulos atrayentes.

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: b... buena fiesta...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Cierto, pero ellos solo buscan los incentivos. El problema *real* es la gente que clickea los títulos

```
publish("act2",["dee",3]);
```

s: ¿Por qué la gente retweetea esas noticias horribles? ¿Solo para hacer sentir mal a los demás?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, lo sé!

(#act2-preamble-end)


# act2-preamble-news2

```
publish("act2",["dee",3]);
```

s: ¿Viste esa *nueva historia* que se hizo viral?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: h-hola…

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Es completamente *fake*. ¿Qué idiota retweetearía eso?

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: b… buena fiesta…

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: ¡Digo! ¡Abre google e investígalo primero!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh ¡lo sé!

(#act2-preamble-end)


# act2-preamble-cat

```
publish("act2",["dee",3]);
```

s: Como decía, la industria del meme está explotando a los gatos.

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: h-hola…

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Escrito en esta tesis

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: b…buena fiesta…

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Vi a alguien retweeteando ese GIF de un gato bebiendo leche ayer.

```
publish("act2",["dee",3]);
```

s: ¡No pueden digerir esa ^mierda^! ¡¿Quien retweetearía abuso animal como ese?!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: ¡Ugh, lo sé!

(#act2-preamble-end)


# act2-preamble-tinder

```
publish("act2",["dee",1]);
```

s: ¡Y nunca me contestó!

```
publish("act2",["dee",0]);
publish("act2",["party_hong","next"]);
```

h2: h-hola...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: ¿Aunque eran compatibles en Tinder?

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: b... buena fiesta...

```
publish("act2",["party_hong","next"]);
```

{{if _.serialkiller}}
(#act2-preamble-serialkiller)
{{/if}}

{{if _.hookuphole}}
(#act2-preamble-hookuphole)
{{/if}}

{{if _.pokemon}}
(#act2-preamble-pokemon)
{{/if}}

# act2-preamble-serialkiller

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: ¡No lo sé! ¿Cree que soy un asesino serial o qué? Que paranoico.

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: ¡Ugh, lo sé!

(#act2-preamble-end)


# act2-preamble-hookuphole

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Si, no lo sé ¿Talvez piense que una cita no puede llenar el agujero en su corazón?

s: ¡Que deje de ser tan puro! ¡Abre tu mente! ¡Después, abre las piernas!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: ¡Ugh, lo sé!

(#act2-preamble-end)


# act2-preamble-pokemon

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: ¡Si, no lo se! no era muy caliente pero... creí atrapar una buena pesca...

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: ¡Atrápalos a todos!™

(#act2-preamble-end)


# act2-preamble-end

```
Game.clearText();
publish("act2-out-1");
music(null, {fade:1});
```

(...3000)

```
music('battle', {volume:0.5});
publish("hp_show");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

n: ROUND TWO: *FIGHT!*

[¡Oh no, todos nos odian!](#act2a_social)

[¿Por qué miras a la pelirroja?](#act2a_perv)

[¡Hey, hablemos del significado de la vida!](#act2a_meaning)

# act2a_social

`bb({eyes:"sad"})`

b: ¡Estamos bajando el estado de ánimo de esta fiesta porque somos un triste bulto!

`bb({eyes:"shock", body:"two_up"})`

b: ¡Estamos matando las buenas vibras! ¡Estamos cometiendo vibra-cidio en primer grado!

`bb({eyes:"normal", body:"normal"})`

b: ¡Humano! ¡Tenemos que irnos antes de que--

```
_.a2_first_danger = 'social';
_.a2_attack_1 = "alone";
```

(#act2b)

# act2a_perv

`bb({eyes:"suspect"})`

b: ¡Son mucho más atractivos que nosotros! ¡Lo que significa que tan solo mirarlos--

`bb({eyes:"shock", body:"two_up"})`

b: NOS VUELVE ACOSADORES!

`bb({body:"normal"})`

b: Somos horribles, malos, terribles, horribles horribles perver--

```
_.a2_first_danger = 'perv';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2a_meaning

`bb({body:"one_up", eyes:"normal_r"})`

b: Al final de todo ¿Qué posibilidad tenemos de  hacer algo que tenga verdadera importancia?

`bb({body:"normal", eyes:"sad"})`

b: ¿Contribuir a la humanidad? Todo el buen trabajo cae en Ozymandias. ¿Amor? La muerte siempre acaba con él.

`bb({eyes:"sad_r"})`

b: ¡Y la muerte siempre está ahí! *Nosotros* moriremos. Todos nuestros *seres queridos* morirán.

`bb({eyes:"shock", body:"two_up"})`

b: ¡La segunda ley de la termodinámica dice que hasta el universo mismo morirá!

`bb({eyes:"suspect", body:"normal"})`

b: ¿"La muerte nos hace apreciar la vida"? ¡Eso es como decir que la esclavitud es buena porque nos hace apreciar la libertad!

`bb({body:"one_up"})`

b: Oh ¿"Necesitas darle su propio significado"? ¡Eso es lo que los fanáticos religiosos y los teóricos de conspiraciones hacen!

`bb({eyes:"shock", body:"two_up"})`

b: ¡La vida no tiene significado! ¡La muerte no tiene significado! ¡Incluso el *significado* no tiene significado! Qué se supone que un alma mortal--

```
_.a2_first_danger = 'meaning';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2b

`bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"suspect"})`

b: ¿Uh...? ¿Puedes escucharme, humano?

`bb({eyes:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"shock", mouth:"small_talk", body:"chest", MOUTH_LOCK:true})`

b: *GASP*

`bb({mouth:"small_talk"})`

b: TENGO QUE PREVENIRTE DE...

[*¡Más del *mismo* peligro!](#act2b_louder)

{{if _.a2_first_danger=="social"}}
[¡Un peligro *social* diferente!](#act2b_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[¡Un peligro *moral* diferente!](#act2b_different_moral)
{{/if}}

[¡Estás ignorando el peligro! ¡Eso es peligroso!](#act2b_ignore)

# act2b_louder

`_.a2_first_choice = "louder"`

{{if _.a2_first_danger=="social"}}
(#act2b_louder_social)
{{/if}}

{{if _.a2_first_danger=="perv"}}
(#act2b_louder_perv)
{{/if}}

{{if _.a2_first_danger=="meaning"}}
(#act2b_louder_meaning)
{{/if}}

# act2b_louder_social

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: ¡LAS EMOCIONES SON CONTAGIOSAS! ¡SI NO TE MARCHAS VAS A INFECTAR A TODOS CON TU VIRUS EMOCIONAL!

b: ¡Vas a crear una epidemia mortífera de SÍNDROME DE BULTO TRISTE!

`bb({eyes:"suspect", body:"normal", mouth:"normal"})`

b: ¡Tenemos que salir de aquí y ponernos en cuarentena a nosotros mismos por siempre en un cuarto  pequeño con Netflix y comida a domicilio!

```
_.a2_second_danger = 'netflix';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "un aislamiento";
```

(#act2c)

# act2b_louder_perv

`bb({eyes:"suspect", body:"two_up", mouth:"normal"})`

b: NO SEAS UN ACOSADOR. ¡VA CONTRA LA LEY!

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: Ley del pervertido, Sección 74.5 (1) Cualquier persona que mire (a) esos hombros musculosos (b) esas nalgas de burbuja (2) Será conocido por este medio como

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: "UN SUCIO PERVERTIDO DE ^MIERDA^"

```
_.a2_second_danger = 'law';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "la ley";
```

(#act2c)

# act2b_louder_meaning

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: ¡Y aunque encuentre un propósito noble en la vida, siempre está la posibilidad de arruinarlo todo!

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Alfred Nobel quiso la paz mundial y entendimiento mutuo para las culturas del mundo. Así que hizo el camino más fácil.

`bb({eyes:"normal_r"})`

b: Necesitó una forma de crear túneles de tren a bajo costo. Así que creó un nuevo material llamado "dinamita"...

`bb({body:"one_up", eyes:"normal"})`

b: Que fue usado en la Primera Guerra Mundial para MATAR A MILLONES DE PERSONAS

`bb({body:"two_up", eyes:"shock"})`

b: ¡ES EL EFECTO MARIPOSA, HUMANO! CUANTAS PERSONAS ESTAS ASESINANDO ACCIDENTALMENTE AHORA MISMO

```
_.a2_second_danger = 'butterfly';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "La Primera Guerra Mundial";
```

(#act2c)

# act2b_different_social

`_.a2_first_choice = "different"`

`bb({eyes:"normal_r", body:"point", mouth:"normal"})`

b: ¿Y sabes que es peor que no gustarle a nadie? gustarle a *todos*.

`bb({body:"one_up", eyes:"suspect", mouth:"normal"})`

b: Es decir, convertirse en uno de *esos* animales de fiesta que buscan placer.

`bb({body:"normal", mouth:"small"})`

b: ¡Una vida vacía con amigos vacíos quienes solo conoces al tu vacío!

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: ¡Humano, tenemos que correr de esos zombies de placer antes de que nos vuelvan uno de ellos!

```
_.a2_second_danger = 'zombies';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "zombies";
```

(#act2c)

# act2b_different_moral

`_.a2_first_choice = "different"`

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: ¡Hay gente muriendo de hambre y genocidios *justo ahora* y nosotros aquí festejando!

`bb({body:"point", eyes:"closed", mouth:"small"})`

b: Un hombre sabio dijo una vez: "Lo único que hace falta para que la maldad gane es que la gente buena no haga nada."

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: NO ESTAMOS HACIENDO NADA.

`bb({mouth:"small"})`

b: POR FESTEJAR ESTAMOS AYUDANDO A *HITLER*.

```
_.a2_second_danger = 'hitler';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "Hitler";
```

(#act2c)

# act2b_ignore

`_.a2_first_choice = "ignore"`

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: ¿Crees que estás a salvo solo porque mantienes a las bacterias alejadas del detector de monóxido de carbono?

`bb({eyes:"suspect_r"})`

b: ¿Crees que estás a salvo solo porque mantienes a las bacterias alejadas del detector de monóxido de carbono?

`bb({body:"scream_c_1"})`

b: ¡MORIREMOOOOOOOOOS!

```
_.a2_second_danger = 'ignore';
_.a2_attack_2 = "harm";
_.a2_hoodie_callback = "monóxido de carbono";
```

(#act2c)

# act2c

```
hong({body:"ignore_sweat"});
bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true});
```

b: ...

`bb({eyes:"happy", mouth:"smile", body:"chest"})`

b: ¡Oh, gracias a dios, humano, creo que ya puedes escucharme otra vez!

`bb({eyes:"closed", body:"point"})`

b: DEBO PREVENIRTE DE...

{{if _.a2_first_choice=="louder"}}
[¡*Aún más* del mismo peligro!](#act2c_louder)
{{/if}}

{{if _.a2_first_choice!="louder"}}
[¡*Más* del mismo peligro!](#act2c_louder)
{{/if}}

{{if _.a2_first_danger=="social"}}
[¡Un peligro *social* diferente!](#act2c_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[¡Un peligro *moral* diferente!](#act2c_different_moral)
{{/if}}

[¿Revisaste el ponche antes de beberlo?](#act2c_punch)

#act2c_louder

{{if _.a2_second_danger=="netflix"}}
(#act2c_louder_netflix)
{{/if}}

{{if _.a2_second_danger=="law"}}
(#act2c_louder_law)
{{/if}}

{{if _.a2_second_danger=="butterfly"}}
(#act2c_louder_butterfly)
{{/if}}

{{if _.a2_second_danger=="zombies"}}
(#act2c_louder_zombies)
{{/if}}

{{if _.a2_second_danger=="hitler"}}
(#act2c_louder_hitler)
{{/if}}

{{if _.a2_second_danger=="ignore"}}
(#act2c_louder_ignore)
{{/if}}

# act2c_louder_netflix

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: ¡No, Netflix y comida a domicilio no es suficiente cuarentena! ¡Seguiríamos infectando al repartidor!

`bb({body:"one_up", mouth:"small"})`

b: ¡Necesitamos mudarnos a territorio de Yukón en Canadá! ¡Recibiremos nuestra comida por drones!

`bb({body:"two_up", mouth:"normal"})`

b: Aunque tendríamos que esterilizar el dron para limpiarlo de nuestros GÉRMENES DE BULTO TRISTE

`_.a2_attack_3 = "alone";`

`_.a2_hoodie_callback = "un aislamiento";`

(#act2d)

# act2c_louder_law

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: El SUCIO PERVERTIDO DE ^MIERDA^ será sentenciado a 72 horas en uno de esos artefactos de humillación medievales

b: Amenos que secretamente *ya* tenga una de esas cosas

`bb({body:"scream_a_1"})`

b: Porque es un SUCIO PERVERTIDO DE ^MIERDA^

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "la ley";`

(#act2d)

# act2c_louder_butterfly

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: ¡EFECTO MARIPOSA! ¿Estás usando una copa de plástico no biodegradable?

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: BAM, SE FILTRA VENENO DE UN VERTEDERO Y MATA UN NIÑO

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: ¿Estás sudando y tu corazón late fuerte?

`bb({body:"scream_a_1"})`

b: BAM, HACES QUEBRAR NUESTRO SISTEMA DE SALUD SANITARIA Y MILLONES MUEREN

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "el efecto mariposa";`

(#act2d)

# act2c_louder_zombies

`bb({body:"normal", mouth:"small", eyes:"angry"})`

b: Esos zombies del placer se detendrán frente a ti diciendo:

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: ME GUUUSTAS. ME GUUUUUUUSTAS.

`bb({body:"scream_a_1"})`

b: ¡Entonces te morderán y te convertirán en un PERVERTIDO DESCEREBRADO y/o en una ^PUTA^ ESTÚPIDA!

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "zombies";`

(#act2d)

# act2c_louder_hitler

`bb({body:"scream_a_1"})`

b: ¡LOS NAZIS ESTÁN DIRIGIENDO A LAS CALLES AHORA MISMO!

`bb({body:"one_up", mouth:"smile", eyes:"happy"})`

b: Diciendo, *¡Miren a esa "buena gente" divirtiéndose con su "relajación" y "desprecaución"!*

`bb({body:"point", mouth:"smile", eyes:"happy_r"})`

b: *Ahora nuestros planes pueden comenzar ¡El imperio florece!*

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "Hitler";`

(#act2d)

# act2c_louder_ignore

`bb({body:"normal", mouth:"normal", eyes:"normal_r"})`

b: Y pensándolo bien ¡¿Este lugar *tiene* un detector de monóxido de carbono?!

`bb({body:"two_up", mouth:"small", eyes:"normal"})`

b: ¿Y SI ESTAMOS SIENDO ENVENENADOS AHORA MISMO?

`bb({body:"scream_a_1"})`

b: NI SIQUIERA VERÍAMOS LA MUERTE VENIR. SOLO DEJAREMOS DE EXISTIR POR SIEMPRE Y PARA SIEMP--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "monóxido de carbono";`

(#act2d)

# act2c_different_social

`bb({body:"normal", mouth:"normal", eyes:"sad"})`

b: ¿Qué pasa si solo somos *esencialmente incapaces* de ser amados o amar a otros?

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: ¿Qué pasa si algo irreversiblemente nos rompió por dentro hace mucho tiempo? ¿Y si nunca existió en primer lugar?

`bb({body:"scream_a_1"})`

b: ¡AHH ESTAMOS ROTOS! ¡TAN ROTOS TAN ROTOS TAN ROT--

`_.a2_attack_3 = "alone";`

(#act2d)

# act2c_different_moral

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: ¿Qué pasa si solamente estamos *esencialmente podridos?*

`bb({body:"one_up", eyes:"sad"})`

b: Otros tienen algún incentivo interior para ser bondadosos, pero nosotros solo hacemos el *bien* por culpa o vergüenza, en absoluto.

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: ¿Qué pasa si está en nuestra naturaleza el herir a otros? ¿Qué pasa si no podemos ser *nada* además de una carga para las personas cercanas a nosotros?

`bb({body:"scream_a_1"})`

b: ¡AHH ESTAMOS ROTOS! TAN ROTOS TAN ROTOS TAN ROT--

`_.a2_attack_3 = "bad";`

(#act2d)

# act2c_punch

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: No estoy siendo irracional. La gente droga los tazones de ponche. Es algo que pasa normalmente.

`bb({eyes:"suspect"})`

b: Humano ¿no te duele la cabeza? ¿Tus extremidades están débiles? Creo que estamos muriendo.

`bb({body:"scream_a_1"})`

b: ¡AHH ESTAMOS MURIENDO! ESTAMOS MURIENDO ESTAMOS MURIENDO ESTAMOS MURI--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "tazones de ponche";`

(#act2d)

# act2d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"attacked"});
attack("20p", _.a2_attack_1);
```

(...401)

```
hong({body:"attacked_2"});
attack("20p", _.a2_attack_2);
```

(...401)

```
hong({body:"attacked_3"});
attack("20p", _.a2_attack_3);
```

(...1001)

h: ¡^MI-ER-DA^!

h: ^MIERDA^ ^MIERDA^ *^MIERDOSA^ ^MIERDA^*

`bb({body:"two_up", mouth:"smile", eyes:"happy"});`

b: ¡Yey, humano! ¡Estoy tan feliz de que puedas escucharme otra vez!

`bb({body:"normal", mouth:"small", eyes:"sad"})`

b: ¿Por qué me estabas ignorando?

`hong({body:"facepalm"})`

h: ^Puto^ dios, eres un completo idiota.

`hong({body:"facepalm_2"})`

h: ¿Conoces esa historia de los nativos americanos?

h: "Hay dos lobos en tu interior, uno es esperanza, el otro es desesperación ¿Cuál de los dos gana? El que alimentas."

```
hong({body:"facepalm_3"});
bb({eyes:"normal"});
```

h: ¡Estaba intentando *matarte de hambre* ^maldito^ sádico!

`hong({body:"smile", mouth:"smile"})`

h: Como sea, haré afirmaciones positivas en lugar de eso.

h: *Soy querido, soy bueno, soy listo, soy apuesto. Soy especial.*

`bb({eyes:"suspect"});`

[¡Dios, eso es tan narcisista!](#act2d_narcissist)

[las afirmaciones ya fueron *desaprobadas*](#act2d_disproven)

[No le acredites historias random a los indígenas.](#act2d_racist)

# act2d_disproven

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: Eso es el tiro por la culata para las personas con baja autoestima.

`bb({body:"one_up", mouth:"small", eyes:"normal"})`

b: Fue un estudio bien diseñado – pruebas aleatorias controladas, El experimentador no tenía idea de quien estaba en qué grupo.

`bb({body:"two_up", mouth:"small", eyes:"normal_r"})`

b: Resultados: ¡Si ya tienes el autoestima bajo, repetir afirmaciones te hará sentir peor que si no hubieras dicho nada!

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: Wood 2009, Ciencia Psicológica, búscalo en google académico, humano,

`bb({body:"scream_b_1"})`

b: ASÍ QUE DEJA DE PROPAGAR NOTICIAS FALSAS POCO CIENTÍFICAS

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_narcissist

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: ¡Tu *necesitas* ver tus propios errores modestamente para poder crecer como persona!

`bb({body:"two_up", eyes:"suspect"})`

b: No puedes rociar aromatizador sobre un cuarto mohoso, tratar de cubrir sus desperfectos lo hace peor a largo plazo.

`bb({body:"chest", mouth:"smile", eyes:"closed"})`

b: Por suerte, yo, como tu leal lobo guardián, puedo avisarte sobre tus errores. Que en este momento es--

`bb({body:"scream_b_1"})`

b: TODO, TODO ESTÁ MAL

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_racist

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Los nativos americanos son los *Americanos actuales*, no  "nobles salvajes" no uses un nombre para que la nota de tu galleta de la fortuna sea más *exótica*.

`bb({eyes:"suspect_r"})`

b: ¡Estás reduciendo a las personas individuales y los complejos de cultura a un sello distintivo! ¡Eso es racismo benigno!

`bb({body:"scream_b_1"})`

b: DEJA DE SER *RACISTA* IDIOTA DE *OJOS ENTRECERRADOS*

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2e

h: ^COÑ^.

`hong({body:"yell", mouth:"yell"})`

h: ¿Sabes algo? ¡Eres irracional!

h: ¡Todos saben que las emociones son irracionales! ¡Especialmente el miedo!

`hong({body:"facepalm_2"})`

h: ¡Eres una inútil sobra de la evolución, como mi apéndice o mis muelas del juicio!

`hong({body:"yell", mouth:"yell"})`

h: ¡Digo, toda la metáfora del lobo es estúpida! Solo eres un montón de productos neuroquímicos en mi cabeza.

`hong({body:"cross", mouth:"cross"})`

h: ¡¿Por qué debo escuchar a un inútil, irracional e inexistente montón de ^mierda^ como tú?!

`bb({eyes:"sad", MOUTH_LOCK:true})`

b: ...

[Vaya, humano. Eso es muy hiriente.](#act2e_hurtful)

[Soy una emoción, las emociones son válidas.](#act2e_valid)

[Humano, *ambos* somos "solo químicos".](#act2e_rational)

# act2e_hurtful

`bb({body:"chest"})`

b: Tu  sabes que soy *parte* de ti. Cuando dices eso te estás hiriendo *a ti mismo*.

`bb({body:"scream_a_1"})`

b: ¿Por qué te hieres a ti mismo, humano? DEJA DE HERIRTE A TI MISMO.

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2e_rational

`bb({body:"normal", mouth:"normal", eyes:"normal_r"});`

b: Tus motivaciones más profundas son dopamina, tus mejores alegrías son serotonina.

`bb({body:"one_up"});`

b: Tus recuerdos son valores sinápticos, Tu razón son las señales eléctricas propensas a fallar.

`bb({eyes:"normal", body:"normal"});`

b: ¡Entonces si dices que por ser "solo químicos" *soy* irracional... significa que *tu* eres irracional!

`bb({body:"two_up", eyes:"shock"});`

b: ¡Y si *ambos* somos irracionales, entonces *nunca* sabremos como es estar realizado y feliz!

`bb({body:"scream_a_1"})`

b: ¡AHHH ESTAMOS ROTOS! ¡TAN ROTOS TAN ROTOS TAN ROT--

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2f)

# act2e_valid

`bb({body:"normal", mouth:"normal", eyes:"suspect"});`

b: Espérate... *dicen* que tus emociones son válidas, así que siempre está bien aceptarlas.

`bb({eyes:"suspect_r"});`

b: Pero también *dicen* que las emociones son irracionales, así que las emociones no son fiables.

`bb({eyes:"angry"});`

b: Oh mi dios ¡Nos han engañado todo este tiempo!

`bb({body:"scream_a_1"})`

b: "ELLOS" NOS HAN ALIMENTADO CON CONTRADICCIONES PARA VOLVERNOS DEPENDIENTES DEL COMPLEJO INDUSTRIAL DE LA AUTOAYUDA.

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2f

`hong({body:"defeated", MOUTH_LOCK:true});`

h: ...

h: Odio esto. *Duele* tanto.

h: No puedo calmarte, no puedo ignorarte, no puedo pelear contigo.

`bb({eyes:"suspect"});`

h: No importa lo que haga, no puedo deshacerme de t-

`bb({body:"cry_1"});`

b: Bueno, talvez NO SE *SUPONE* QUE TE DESHAGAS DE MI.

`bb({body:"cry_2"});`

b: ¡¿Cómo crees que *yo* me siento, humano?!

`bb({body:"cry_4", mouth:"cry", eyes:"cry"})`

b: ¡Trato de dar lo mejor para ser tu perro guardián, pero tú me sigues viendo como un lobo malo!

b: ¡Así que me esfuerzo *más* para avisarte del peligro! ¡*Más* peligro! ¡*Diferente* peligro!

`bb({eyes:"cry_2"})`

b: ¡Pero no importa que tan *duro* intente protegerte! ¡Tú me *sigues* viendo como tu enemigo!

`bb({body:"cry_5"});`

b: ¡¿Qué estoy haciendo mal?!

`bb({body:"cry_2"});`

b: Ya sé que apesto en mi trabajo. ¡Pero lo intento, humano!

`bb({body:"cry_3"});`

b: ...lo intento.

`bb({body:"cry_6", mouth:"right", eyes:"cry_r_1"});`

b: No tienes que escuchar mis advertencias, o estar de acuerdo conmigo, ni siquiera tengo que *gustarte*.

`bb({eyes:"cry_r_2"});`

b: Yo solo... solo quiero que seas un poco paciente conmigo.

`bb({eyes:"cry_r_3"});`

b: Quisiera que te sentaras a mi lado por un rato, en vez de darme la espalda y--

```
bb({eyes:"cry_r_4"});
hong({body:"listen"});
```

r: Hey, tu.

```
hong({body:"look"});
Game.clearText();
publish("act2-in-2");
publish("hp_hide");
music('party1', {volume:0.4, fade:2});
```

(...2000)

```
publish("act2",["party_hunter",2]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: Casi parece que estás atrapado en una batalla contigo mismo.

```
publish("act2",["party_hunter",3]);
publish("act2",["party_hong",13]);
```

h2: ¿Era tan obvio?

```
publish("act2",["party_hunter",4]);
publish("act2",["party_hong",14]);
```

r: Estabas, uh, hablando con tu abrigo de {{_.a2_hoodie_callback}} o algo así.

```
publish("act2",["party_hunter",13]);
publish("act2",["party_hong",15]);
sfx("rustle", {volume:0.6});
setTimeout(function(){
	publish("act2",["party_hong",16]);
	sfx("concrete_step3", {volume:0.6});
},401);
setTimeout(function(){
	publish("act2",["party_hong",17]);
	sfx("concrete_step4", {volume:0.6});
},801);
```

h2: Oh dios, soy un desastre.

```
publish("act2",["party_hunter",7]);
publish("act2",["party_hong",18]);
sfx("squeak");
```

r: Hey. No estás solo, amigo. La ansiedad es súper común.

```
publish("act2",["party_hunter",5]);
publish("act2",["party_hong",19]);
```

{{if _.act1_ending=="fight"}}
r: ¡Oí que ayer alguien sufrió un una crisis nerviosa y destruyó su teléfono en el campus!
{{/if}}

{{if _.act1_ending=="flight"}}
r: ¡Si, oí que ayer alguien se enrolló como un armadillo y empezó a llorar en público!
{{/if}}

```
publish("act2",["party_hunter",2]);
```

r: Escucha, se lo que es tener ese animal en tu cabeza.

```
publish("act2",["party_hunter",8]);
```

r: *Todos* lo sabemos. Es por eso que lanzo estas fiestas cada semana, olvidar las *preocupaciones*, olvidar ese *animal*.

```
publish("act2",["party_hunter",9]);
publish("act2",["party_hong",20]);
```

h2: Pero mi ansiedad...

```
publish("act2",["party_hunter",2]);
publish("act2",["party_hong",21]);
```

r: No te preocupes, niño. Antes era como tú. Pero después encontré un pequeño truco para apagar esa voz negativa para siempre...

```
publish("act2",["party_hunter",3]);
Game.clearText();
music(null, {fade:1});
```

(...2001)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",22]);
sfx("rustle");
```

(...2501)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",23]);
sfx("rustle2");
```

(...1001)

```
publish("act2",["party_hunter",11]);
```

r: Mi mezcla especial. Es un poco más fuerte que... bueno, cualquier cosa legal realmente.

```
publish("act2",["party_hunter",12]);
publish("act2",["party_hong",24]);
```

r: ¡Salud, hasta el fondo!

```
hong({body:"hold"});
bb({body:"normal", mouth:"small", eyes:"wat"});
Game.clearText();
Game.WORDS_HEIGHT_BOTTOM = -1;
publish("act2-out-3");
publish("hp_show");
```

(...3500)

[Oh. Mi. Dios.](#act2g_1) `Game.OVERRIDE_CHOICE_LINE=true`

[Es una mala forma de afrontar tus problemas](#act2g_2) `Game.OVERRIDE_CHOICE_LINE=true`

[No aceptes bebidas de extraños.](#act2g_3) `Game.OVERRIDE_CHOICE_LINE=true`

# act2g_1

b: O--

(#act2g)

# act2g_2

b: E--

(#act2g)

# act2g_3

b: N--

(#act2g)

# act2g

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"forward", mouth:"forward"});
bb({body:"frazzled", mouth:"frazzled", eyes:"frazzled"});
```

h: ¡Mmm, que sabor tan exquisito!

h: ¡Un fuerte sabor a "apaga tu mente", con una ligero gusto a "no volveré a sentir nada nunca más"!

b: Esto es malo, humano. Esto es muy, muy malo.

[Así empiezan las adicciones.](#act2h_opt1) `Game.OVERRIDE_CHOICE_LINE=true`

[¡*Sabía* que ella estaba mal!](#act2h_opt3) `Game.OVERRIDE_CHOICE_LINE=true`

[¡Ellos pudieron drogar eso!](#act2h_opt2) `Game.OVERRIDE_CHOICE_LINE=true`


# act2h_opt1

b: Así es *como*--

(#act2h)

# act2h_opt2

b: ¡Ellos pudi--

(#act2h)

# act2h_opt3

b: ¡*Sabía* que--

(#act2h)

# act2h

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"back", mouth:"back"});
bb({body:"panicked", mouth:"panicked", eyes:"panicked"});
```

h: ¡Delicioso, *y* más barato que la terapia!

b: HUMANO, POR FAVOR DETENTE

h: ¡Hehehe!

h: ¿Y qué vas a hacer al respecto, estúpido?

b: Lo siento, humano.

b: Voy a tener que usar mi ATAQUE ESPECIAL

```
bb({body:"special_a"});
music('battle', {volume:0.5});
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act2h_attack) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act2h_attack) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act2h_attack) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`

# act2h_attack

```
bb({body:"special_b_1"});
hong({body:"forward", mouth:"forward"});
sfx("charging");
```

h: ¿Qué chucha es eso?

h: Sigue ladrando tus estúpidas *palabras*, no me--

```
bb({body:"special_c"});
sfx("hadouken");
```

(...901)

(#act2i)

# act2i

```
publish("hide_tabs");
publish("show_special_attack");
Game.FORCE_CANT_SKIP = true;
music(null);
stopAllSounds();
```

(...5000)

```
publish("show_tabs");
hong({ body:"final", mouth:"final" });
bb({ body:"normal", mouth:"normal", eyes:"sad" });
attack("100p", _.SPECIAL_ATTACK);
Game.FORCE_CANT_SKIP = false;
setTimeout(function(){
	publish("remove_special_attack");
},30);
```

(...2500)

h: QUÉ FUE ESO

b: Lo siento, humano. Necesitaba mostrarte las consecuencias.

{{if _.SPECIAL_ATTACK=="harm"}}
h: PUDE *VER* MI PROPIO CADÁVER. PUDE *SENTIR* COMO ES MORIR.
{{/if}}

{{if _.SPECIAL_ATTACK=="alone"}}
h: PUDE *SENTIR* LA MIRADA DE DISGUSTO DE TODOS. PUDE *ESCUCHAR* TODO LO QUE DECÍAN.
{{/if}}

{{if _.SPECIAL_ATTACK=="bad"}}
h: PUDE *OÍR* COMO CRUJÍAN LAS COSTILLAS. PUDE *SABOREAR* LA SANGRE EN EL AIRE.
{{/if}}

b: Lo siento, humano.

n: *ACÁBALO*

[{LUCHAR: Golpea a la anfitriona.}](#act2j_fight) `Game.OVERRIDE_CHOICE_LINE=true`

[{HUIR: Salgamos de aquí.}](#act2j_flight) `Game.OVERRIDE_CHOICE_LINE=true`

# act2j_fight

`bb({ eyes:"angry" });`

b: Esa psicópata se está aprovechando de ti.

b: ¡Está tratando de corromperte! ¡Quiere arruinarte como están ellos!

`bb({ body:"yell_angry_1" });`

b: ¡Golpea a esa idiota! ¡Apágale malditas luces! 

`bb({ body:"final_1" });`

b: GOLPÉALA GOLPÉALA GOLPÉALA GOLPÉALA GOLPÉALA GOLPÉALA GOLPÉALA GOLPÉALA GOLPÉALA GOLP--

`_.a2_ending = "fight";`

(#act2k)

# act2j_flight

b: *Sabía* que esa gente estaba mal. ¡Todos ocultan su dolor con cosas horribles!

`bb({ body:"yell_1" });`

b: ¡Y te están persuadiendo para que hagas lo mismo! ¡Te están corrompiendo! ¡Tenemos que escapar!

`bb({ body:"final_1" });`

b: SALGAMOS DE AQUÍ SALGAMOS DE AQUÍ SALGAMOS DE AQUÍ SALGAMOS DE AQUÍ SALG--

`_.a2_ending = "flight";`

(#act2k)

# act2k

```
Game.clearText();
publish("act2-in-4");
publish("hp_hide");
music('party1', {volume:0.6, fade:1.5});
```

(...2001)

```
publish("act2",["party_hong",26]);
sfx("slide");
```

(...1001)

```
publish("act2",["party_hunter",14]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: ¿Estás bien, chico?

`publish("act2",["party_hunter",13]);`

{{if _.a2_ending=="fight"}}
(#act2k_fight)
{{/if}}

{{if _.a2_ending=="flight"}}
(#act2k_flight)
{{/if}}

# act2k_fight

```
Game.clearText();
publish("act2",["party_hunter",21]);
publish("act2",["party_hong",33]);
music(null);
sfx("hit");
```

(...1000)

```
sfx("record_scratch");
publish("act2",["party_hunter",22]);
publish("act2",["party_hong",34]);
publish("act2",["dee",6]);
publish("act2",["dum",6]);
```

r: T-tú...

```
publish("act2",["party_hunter",23]);
publish("act2",["party_hong",35]);
publish("act2",["dee",5]);
publish("act2",["dum",5]);
music('party1', {volume:0.6, fade:6});
```

r: eres *dulce*.

r: Me gusta eso, ven a mi fiesta la próxima semana, cariño.

```
publish("act2",["party_hunter",19]);
publish("act2",["party_hong",36]);
```

h2: Ok adiós, ciao, bye bye, au revoir

r: ¡El animal pudo ganar hoy, pero vuelve luego, mesclaré algo más fuerte para ti!

h2: sayōnara, auf wiedersehen, zài jiàn, shalom

r: ¡Tú y yo, chico, vamos a mostrarle a esa bestia quien manda!

(#act2k_end)

# act2k_flight

`publish("act2",["party_hong",36]);`

h2: Ok lo siento, tengo que correr

`publish("act2",["party_hunter",16]);`

r: Vaya, el animal te ganó esta vez ¿no?

`publish("act2",["party_hunter",15]);`

h2: No no no, yo solo, uhh tengo que correr un maratón. Tengo que ir rápido.

`publish("act2",["party_hunter",19]);`

r: Ven a mi fiesta la próxima semana, cariño. Mesclaré algo más fuerte para ti.

h2: Ok gracias, tengo que correr correr correr

r: ¡Tú y yo, chico, vamos a mostrarle a esa bestia quien manda!

(#act2k_end)

# act2k_end

```
Game.clearText();
publish("act2-out-5");
publish("act2-outro", ["end1"]);
music("hum", {fade:2, volume:0.6});
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2500)

```
publish("act2", ["act2_end",2]);
sfx("whoosh");
```

(...1000)

b: ¡Humano! ¿Estás bien?

```
publish("act2", ["act2_end","next"]);
```

b: Oh eso estuvo *cerca*. Realmente pudimos--

```
Game.clearText();
publish("act2", ["act2_end","next"]);
music(null);
sfx("squeak");
```

(...1500)

```
publish("act2", ["act2_end","next"]);
sfx("hit");
```

(...1000)

h: Voy a volver a esa fiesta la próxima semana.

h: A la aproxima voy a pelear, y no solo voy a *derrotarte*...

h: Voy a matarte.

```
Game.clearText();
publish("act2", ["act2_end","next"]);
sfx("concrete_step1");
````

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step2", {volume:0.8});
```

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step3", {volume:0.5});
```

(...901)

`sfx("concrete_step4", {volume:0.25});`

(...3000)

`_.INTERMISSION_STAGE = 2;`

(#intermission)