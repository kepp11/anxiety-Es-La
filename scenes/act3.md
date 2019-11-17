# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: ¡Salud!

```
publish("act3",["roofhunter",1]);
publish("act3",["roofhong",1]);
sfx("drinking");
```

(...4001)

```
publish("act3-alpha", ["dizzyhunter",1]);
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",3]);
```

h2: *Ah*, eso da en el clavo.

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: ¿Sabes algo, chico?

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: Específicamente, da en la amígdala izquierda... y la derecha.

```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: Me recuerdas a mí *yo* de antes. Cuando todavía era atormentada por el animal en mi cabeza.

```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: Estoy feliz por poder devolver eso y ayudarte a domar a tu bestia como yo domé a la mía.

```
publish("act3",["roofhunter",2]);
```

r: Hey, pregunta rápida: Verdad o re--

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: ¡RETO!

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: ¡Haha! bien.

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: Ok ¿ves esa piscina azul allí abajo?

```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: Creo. ¿La que está seis pisos abajo?

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: Salta.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: Espera, ¿Qué?

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: ¿Tu animal te está gritando?

```
publish("act3",["roofhunter",23]);
```

r: *¡Oh nooooo, es peligroso, no lo hagaaas!*

```
publish("act3",["roofhunter",22]);
```

r: ¡Es justo por eso que necesitamos retos extremos que desafían la muerte!*

r: *¡Party Hard! ¡Carpe diem!* ¡Inhala un poco de coca el ^culo^ de una ^puta^! ¡#YOLO!

```
publish("act3",["roofhunter",10]);
```

r: ¡Muéstrale a ese animal que nos vale verga! ¡Salta!

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: Uh, pero aveces, um... el miedo tiene un punto...

```
publish("act3",["roofhunter",5]);
publish("act3",["roofhong",12]);
music(null, {fade:2});
```

r: ...

```
publish("act3-alpha", ["dizzyhunter",0]);
publish("act3",["roofhunter",6]);
publish("act3",["dd",1]);
```

r: ¿DISCULPA? ¿eliges a ese McCuidado que piensa que sentirse mal está *bien*?

```
publish("act3",["roofhunter",17]);
```

r: ¡El placer es lo opuesto al dolor! ¡Puedes usarlo para combartir al dolor!

```
publish("act3",["roofhunter",18]);
```

r: ¡Esos pseudo-budistas de Silicon Valley no entienden esa mierda!

```
publish("act3",["roofhunter",6]);
```

r: Yo sé que sabes que ese animal *hiere* a personas como nosotros. *Tortura* personas como nosotros.

```
publish("act3",["roofhunter",19]);
```

r: No es nuestro amigo, es una bestia rabiosa que necesita ser *tranquilizada*,

```
publish("act3",["roofhunter",20]);
```

r: O tener una *bala en su cráneo*.

```
publish("act3",["roofhunter",27]);
```

r: De otra forma, dejarás que gane.

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: No, te equivocas.

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
	music('battle_dark_loop');
});
```

h2: No voy a dejar que gane.

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: ¡Oh sí! ¡Yo creo en ti, bebé! ¡Mata ese animal! <3

(#act3a)



# act3a

```
Game.clearText();
publish("act3-out");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
_.act3_bb_body = 1;
```

(...1500)

```
publish("hp_show");
```

b: no no no no no no

n: ESTE CAPÍTULO TIENE DOS POSIBLES FINALES, UNO ES MUY, *MUY MALO*

b: NO NO NO NO NO NO NO NO NO NO NO NO NO NO

n: ESCOGE SABIAMENTE. PROTEGE A TU HUMANO

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: AAAAAAAAAAAAAAAAAA

`bb({ mouth:"normal" });`

n: BUENA SUERTE.

```
Game.clearText();
bb({ eyes:"start" });
```

[¡Humano, vas morir aquí!](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[¡Esto es estúpido y autodestructivo!](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[¡Esos enfermos no son tus amigos!](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: H--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: E--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: E--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: ¿Sabes? Te hubiera escuchado... si no lo hubieras dicho un zillón de veces ya.

h: Eres un lobo que llora por llorar.

```
bb({ eyes:"sad" });
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act3_fork) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act3_fork) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act3_fork) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`


# act3_fork

```
Game.clearText();
bb({body:"special_attack"});
sfx("charging");
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
Game.FORCE_CANT_SKIP = false;
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Dijiste eso también.

b: Humano, por favor...

`hong({ eyes:"look_right" });`

h: Oh *lo siento*, Big Pharma no aprueba mi automedicación.

h: Mira imbécil, todos tenemos una forma de callar tu ^maldito^ hocico.

`hong({ body:"look_up", eyes:"look_up" });`

h: Algunas personas se tiran en su trabajo.

`hong({ body:"look_down", eyes:"look_down" });`

h: Algunas personas se tiran en el ^sexo^, las drogas y en ver publicaciones de Facebook.

`hong({ body:"normal", eyes:"look_right" });`

h: Algunas personas se tiran en otras personas...

`hong({ eyes:"angry" });`

h: Yo voy a tirarme a esa piscina.

[¡Estás tomado y son SEIS PISOS ABAJO!](#act3_bad_1_harm)

[¿Así es como me agradeces?](#act3_bad_1_insult) `bb({eyes:"angry"});`

[Ok, lo admito. Lo arruiné todo.](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: ¡Aun si aterrizas en el agua, la tensión de la superficie fracturará tus costillas y te provocará una concusión *por lo menos*!

h: Eh.

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Una vez vi a un tipo ruso hacer esto en un video de Youtube.

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: Yo- Espera, *¿Gracias?*

`bb({ eyes:"angry" });`

b: ¡Es exactamente por esto que existo! ¡No puedes confiar en los humanos para protegerse a si mismos!

b: ¡He estado protegiendo tu estúpido trasero toda mi vida y ahora solo vas a-

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)

# act3_good_1

`hong({ body:"laugh_1" })``

h: heh.

`hong({ body:"laugh_2" })``

h: hahahaha

`hong({ body:"laugh_3" })``

h: HAHAHAHAHAHA

```
bb({ eyes:"sorry"});
hong({ body:"yell_1", mouth:"yell", eyes:"blank" });
```

h: ¡Oh vaya, es la declaración más grande del puto siglo!

`hong({ body:"yell_2" });`

h: ¡Sí lo arruinaste todo, pedazo de mierda mal-empaquetada!

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: ¿Algo más que decir, Capitán obvio?

[¡Vengarte de mí no es la solución!](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[¡Pero Esta vez tengo razón!](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Te he hecho daño.](#act3_good_2a)


# act3_good_1_fail_revenge

b: Necesitas tener una relación más sana con tus emociones, en lugar de ahogarte con--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: Así que por favor baja la botella y vam--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)




# act3_bad_2

`bb({ eyes:"sad" });`

b: Por favor... no...

h: Tu barra de energía luce un poco mal, lobito.

h: Si yo fuera tú, escogería mis próximas palabras con mucho cuidado.

`bb({ eyes:"normal" });`

[Bien, ya terminé de protegerte.](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[Tuve razón todo el tiempo.](#act3_bad_2_right)

[Lo siento.](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: Así que olvídate de mí y salta, verás cuanto me importa.

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: Oh bueno. Hasta el fondo.

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: ESPERA ESO ERA PSICOLOGÍA INVERSA SE SUPONE QUE DEBÍAS HACER LO OPUESTO A LO QUE--

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: Te estás poniendo en peligro. Tus supuestos "amigos" te están usando. Y tú estás usando a tus supuestos "amigos".

`bb({ eyes:"sad" });`

b: Por favor, humano... ¿por qué no me crees?

h: Porque tú nunca creíste *en mi*.

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: Otros lobos guardianes tienen humanos que si tienen paciencia entrenándolos para *aprender* a trabajar juntos,

b: ¡En vez de odiarlos por tratar de protegerlos! ¡No puedes solo--

`bb({ eyes:"normal" });`

h: Mala respuesta.

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
publish("bb_STOP_VIBRATING");
attackBB("100p");
```

(...2000)

```
hong({ body:"normal", mouth:"normal", eyes:"normal" });
bb({ body:"dead" });
```

(...999)

h: *"A lo único que hay que tenerle miedo es al miedo en sí."*

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: *"¡No te preocupes!" "Se feliz"*

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h: Todos los sabios de nuestro tiempo están de acuerdo, las emociones negativas son *malas*.

`hong({ eyes:"less_angry" });`

h: ¡Duh! ¡Por eso son *negativas!*

b: Humano... por favor...

`hong({ eyes:"normal" });`

h: Hace rato dije: "Solo quiero ser libre de todo este sufrimiento."

h: Se cumplió mi deseo, ya no siento dolor, ni miedo, ni ansiedad...

h: No siento nada de nada.

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: Estaba tan obsesionado con protegerte de ser herido que no me di cuenta que yo estaba haciendo el daño.

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: NO ME ^JODAS^

`hong({ body:"yell_1" });`

h: ¡No me digas que no te habías dado cuenta hasta ahora!

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: Pudimos evitar tantos problemas, idiota esponjoso. ¿Por qué no lo notaste antes?...

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: ...Estás *perdonado.*

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: ¿Perdonado *por--*?

(#act3_good_2q)


# act3_good_2q

`bb({mouth:"sorry", eyes:"sorry"});`

{{if _.apologized_for_hurt}}
(#act3_good_2q_already_apologized)
{{/if}}

{{if !_.apologized_for_hurt}}
(#act3_good_2q_not_already_apologized)
{{/if}}


# act3_good_2q_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"less_angry" });`

[Lo siento, no fui un buen protector.](#act3_good_3_protector)

[Lo siento, no te respeté.](#act3_good_3_respect)

[Lo siento.](#act3_good_4)


# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[¡Lo siento, mi humano es terrible!](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[Lo siento, no te respeté.](#act3_good_3_respect)

[Lo siento, te hice daño.](#act3_good_3_hurt)



# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: Mi deber es prevenirte de peligros "reales", pero sigo ladrándole a los autos y al cartero.

`bb({eyes:"sorry_up"});`

b: Ladrándole a las sombras, ladro demasiado.

`bb({eyes:"sorry"});`

b: Tiene sentido que quieras amordazarme.

`bb({eyes:"sorry_down"});`

b: Lo siento.

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: Se suponía que fuera tu perro guardián pero actué como si tuvieras que *obedecerme.*

`bb({eyes:"sorry_up"});`

b: Hay una diferencia entre un protector y un jardín prisión, yo crucé la línea.

`bb({eyes:"sorry_down"});`

b: Lo siento.

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: Estaba tan obsesionado con protegerte de ser herido que no me di cuenta que yo estaba haciendo el daño.

`bb({eyes:"sorry_up"});`

b: Fui un perro malo.

`bb({eyes:"sorry_down"});`

b: Lo siento.

(#act3_good_4)


# act3_good_4

```
music(null,{fade:3});
hong({ eyes:"less_angry", MOUTH_LOCK:true },0);
```

h: ...

```
hong({ body:"stop", mouth:"stop", eyes:"blank" });
```

h: Si, bueno, esto era una mala idea de todos modos.

h: Solo hacia esto para arruinarte, y bueno, lo hice.

h: Dejemos esto como un empate ¿Ok?

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: Ok.

h: Ok.

n: *EMPATE*

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






# act3_walkaway

```
publish("start-walkaway-anim");
Game.WORDS_HEIGHT_BOTTOM = 205;
```

(...3501)

```
sfx("bottle_toss");
publish('hong-next');
publish("act3",["roofhunter",7]);
```

(...667)

```
publish("act3",["dd",4]);
publish("act3",["roofhunter",26]);
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("concrete_step2");
```

(...667)

```
publish('hong-next');
publish("act3",["roofhunter",27]);
```

`Game.FORCE_CANT_SKIP = false;`

r: Oh vamos, después de *todo* lo que ese animal te hizo, ¿te vas a rendir y ya?

r: ¿Qué te pasa? ¿Tienes *miedo*?

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: Si.

h2: Tengo miedo.

`publish('hong-next')`

h2: Y eso está bien.

`publish('hong-next')`

h2: Está bien estar asustado.

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

```
publish('hong-next');
```

(...833)

```
publish('hong-next');
sfx("rustle2");
```

(...1333)

```
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",31]);
sfx("concrete_step4");
```

(...667)

```
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("door");
```

(...1333)

```
publish('hong-next');
sfx("concrete_step2");
```

(...501)

```
publish('hong-next');
Game.FORCE_CANT_SKIP = false;
sfx("lock_door");
publish("act3",["roofhunter",32]);
```

(...2001)

```
publish("act3",["roofhunter",33]);
```

r: ...¿Le puso seguro a la puerta?

```
Game.clearAll();
_.INJURED = false;
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2000)

(#act4)




# act3_jump

```
publish("start-jump-anim");
Game.FORCE_TEXT_Y = 300;
```

(...2001)

```
publish('hong-next');
sfx("bottle_toss");
```

(...833)

```
sfx("concrete_step1");
sfx("claps");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",28]);
```
(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step2");
publish('hong-next');
publish("act3",["roofhunter",28]);
```

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",34]);
```

(...1167)

```
sfx("rustle2");
publish('hong-next');
```

(...1001)

`publish('hong-next')`

b: no...

(...501)

`Game.clearText();`

`publish('hong-next')`

(...1333)

```
sfx("quack");
publish('hong-next');
```

(...1333)

`publish('hong-next')`

b: no no no

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

```
sfx("rustle2");
publish('hong-next')
```

(...501)

```
sfx("concrete_step1");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",30]);
```

(...167)

```
sfx("concrete_step2");
publish('hong-next');
```

(...167)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",2]);
publish("act3",["roofhunter",15]);
```

(...167)

```
sfx("bottle_slip");
publish('hong-next');
publish("act3",["dd",3]);
publish("act3",["roofhunter",16]);
```

(...833)

```
sfx("rustle");
publish('hong-next');
```

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
Game.FORCE_TEXT_Y = 325;
Game.OVERRIDE_FONT_SIZE = 50;
```

b: NO!

(...400)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-injury-show");
publish("hide_tabs");
```

(...2000)

```
sfx("hospital1");
publish("act4-injury", [1]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital2");
publish("act4-injury", [2]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital3");
publish("act4-injury", [3]);
```

(...8000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...5500)

`_.INJURED = true;`

(#act4)
