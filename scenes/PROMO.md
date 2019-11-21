# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

[PLAY!](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: Antes de comenzar, ¿cómo te gustaría leer?

`publish("show_options_bottom")`

# intro-start-2

n3: Ahora empecemos con nuestra historia...

```
publish("hide_tabs");
clearText();
```

(...1000)

`publish("intro-to-game-2")`

n2: ESTE ES UN HUMANO

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`

# act1

```
SceneSetup.act1();
publish("hide_tabs");
music('battle', {volume:0.5});
```

(...300)

n: Y ESTA ES SU ANSIEDAD

n: _TÚ_ ERES LA ANSIEDAD

(#act1_normal)


# act1_normal

```
hong({body:"putaway"});
sfx("rustle");
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Nope. No, no escucho. Estoy viendo mi teléfono.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: TU TRABAJO ES PROTEGER A TU HUMANO DEL *PELIGRO*

`bb({eyes:"look", mouth:"small_lock", body:"fear"})`

b: ¡Grito ahogado! ¡Estás desperdiciando tu vida en Twiter! ¡Otra vez!

```
bb({eyes:"normal", mouth:"normal", body:"normal"});
hong({eyes:"annoyed"});
```

h: Sí, me pregunto por qué no me siento a escuchar mis pensamientos más seguido.

`hong({eyes:"neutral"});`

n: ¡RÁPIDO! ¡DEBES PREVENIRLO DEL *PELIGRO*!

```
bb({eyes:"look"});
```

[¡Oh no, qué historia tan horrible!](#act1d_news)

[¡Oh no, ese tweet habla de *nosotros*!](#act1d_subtweet)

[Hey, un GIF de un gatito bebiendo leche](#act1d_milk)

# act1d_milk

`hong({mouth:"smile", eyes:"surprise"});`

h: Ha, sí, es lindo, yo--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: LOS GATOS NO PUEDEN DIGERIR LA LECHE Y SOMOS PERSONAS HORRIBLES POR APOYAR EL ABUSO ANIMAL

(...200)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("20p", "bad");
publish("hp_show");
```



