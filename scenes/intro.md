# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

```
_.PLAYED_BEFORE = !!window.localStorage.continueChapter;
```

{{if !_.PLAYED_BEFORE}}
`Game.OVERRIDE_FONT_SIZE=30;`
{{/if}}

{{if !_.PLAYED_BEFORE}}
[#play1# ¡JUGAR! #play2#](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act2"}}
[_CONTINUAR_: La Fiesta](#act2) `publish("LOAD_GAME", ["act2"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act3"}}
[_CONTINUAR_: La Otra Fiesta](#act3) `publish("LOAD_GAME", ["act3"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act4"}}
[_CONTINUAR_: El Otro Sándwich](#act4) `publish("LOAD_GAME", ["act4"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="replay"}}
`Game.OVERRIDE_FONT_SIZE=30;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="replay"}}
[#play1# REPLAY! #play2#](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE}}
[SELECCIONAR CAPÍTULO](#chapter-select) `Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

[(notas de contenido)](#intro-play-button) `Game.OVERRIDE_CHOICE_LINE=true; publish('show_cn');`

# chapter-select

`publish("HACK_chselect");`

[I. El Sándwich](#intro-start) `publish("HACK_chselect_end"); publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

[II. La Fiesta](#act2) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act2"]); Game.OVERRIDE_CHOICE_LINE=true;`

{{if window.localStorage.act3}}
[III. La Otra Fiesta](#act3) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act3"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.act3}}
[III. La Otra Fiesta]()
{{/if}}

{{if window.localStorage.act4}}
[IV. El Otro Sándwich](#act4) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act4"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.act4}}
[III. El Otro Sándwich]()
{{/if}}

{{if window.localStorage.credits}}
[V. Créditos](#to-credits) `publish("HACK_chselect_end"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.credits}}
[V. Créditos]()
{{/if}}

[(menú principal)](#intro-play-button) `publish("HACK_chselect_end"); Game.OVERRIDE_CHOICE_LINE=true;`

# to-credits

`stopAllSounds();`

(...101)

(#credits)

# intro-start

(...500)

`clearText()`

n3: ¡Hola! Esto más que un “juego” es una aventura interactiva. ¡Esperamos que te guste leer!

n3: Antes de comenzar, ¿Como te gustaría leer?

`publish("show_options_bottom")`

# intro-start-2

n3: ¡Bien! Nota: Siempre puedes cambiar las opciones con el icono de ⚙ abajo. Ademas, El juego se guarda automáticamente en cada capítulo.

n3: (Nota Del Traductor: Originalmente no se especifica el género de NINGÚN personaje. Ya sabes, depende de ti ...y de tus gustos.)

n3: ¡Ahora, empezemos con la historia!

`clearText()`

(...1000)

`publish("intro-to-game-2")`

n2: ESTE ES UN HUMANO

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`