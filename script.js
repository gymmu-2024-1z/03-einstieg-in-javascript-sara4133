import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      //do nothing
    } else if (currentElement === "E") {
      // auch ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentUpperCaseLetter = currentElement.toUpperCase()
    result.push(currentUpperCaseLetter)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um alle e's zu zaehlen
  let eCount = 0
  for (let i = 0; i < input.length; i++) {
    //Zaehle alle e's in einem Text
    const currentElement = input[i]
    //Finde ein e
    if (currentElement === "e") {
      //Zaehle ein e
      eCount++
    } else if (currentElement === "E") {
      //Zaehle auch ein E
      eCount++
    }
  }
  // Gebe die Anzahl der e's zurueck
  return eCount
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)
export function aufgabe12(args) {
  const input = args
  const result = []

  //Erstelle eine Variable und die Position der ersten e's zu speichern
  let firstE = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde ein e
    if (currentElement === "e") {
      // Speichere die position nur beim ersten e
      if (firstE === -1) {
        firstE = i
      }
    }
  }
  return firstE
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe04(args) {
  const input = args
  const result = []
  // Erstelle eine Variable um alle Wörter in einem Text zu zaehlen
  let wordCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde ein Leerzeichen
    if (currentElement === " ") {
      // Zähle ein Wort
      wordCount++
    }
  }
  // Gebe die Anzahl der gefundenen Wörter zurück
  return wordCount + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um die Anzahl der Grossbuchstaben zu zaehlen
  let capitalLetterCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde ein Leerzeichen oder ein Punkt
    if (currentElement === " " || currentElement === ".") {
      // Ignoriere das Leerzeichen oder das Punkt
    } else if (currentElement === currentElement.toUpperCase()) {
      //Zahlen ein Grossbuchstabe
      capitalLetterCount++
    }
  }

  //Wenn die Anzahl Grossbuchstabe größer als 0 ist, gebe wahr zurück
  if (capitalLetterCount > 0) {
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  // Erstelle eine Variable um alle Sonderzeichen zu zaehlen
  let specialCharacterCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde ein Sonderzeichen
    if (
      currentElement === "!" ||
      currentElement === "?" ||
      currentElement === "." ||
      currentElement === ":" ||
      currentElement === "/" ||
      currentElement === "\\" ||
      currentElement === "-" ||
      currentElement === "_" ||
      currentElement === "@" ||
      currentElement === " " ||
      currentElement === "," ||
      currentElement === ";"
    ) {
      // Zähle ein Sonderzeichen
      specialCharacterCount++
    }
  }

  // Wenn die Anzahl Sonderzeichen über 0 ist, gebe wahr zurueck
  if (specialCharacterCount > 0) {
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um zu testen ob das Wort 'und' vorkommt
  let wordCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde das Wort 'und'
    if (
      currentElement === "u" &&
      input[i + 1] === "n" &&
      input[i + 2] === "d"
    ) {
      // Zähle ein Wort
      wordCount++
    }
  }

  // Wenn das Wort 'und' vorkommt, gebe wahr zurueck
  if (wordCount > 0) {
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  // Erstelle eine Variabe um alle e's  mit 3 zu ersetzen in einem Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde ein e
    if (currentElement === "e") {
      // Ersetze ein e mit 3
      result.push("3")
    } else {
      // Gebe das aktuelle Element zurueck
      result.push(currentElement)
    }
  }
  // Gebe das Ergebnis zurueck
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um zu testen ob eine Eingabe genau 6 Elemente hat
  if (input.length === 6) {
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe13(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um zu testen an welcher Stelle das letzte e steht
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push(i)
    }
  }
  return result[result.length - 1]
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []
  // Erstelle eine Variable um die Position des dritten e's zu bestimmen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push(i)
    }
  }
  return result[2]
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um die Eingabe nur bis zum ersten Leerzeichen zu lesen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      return result.join("")
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe18(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um eine Eingabe durch eine andere zu ersetzen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "n") {
      result.push("S")
    } else if (currentElement === "m") {
      result.push("r")
    } else if (currentElement === "e") {
      result.push("16")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um zu testen ob nach jedem ein Leerzeichen kommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      // Erstelle ob als nächstes ein Leerzeichen vorkommt
      if (input[i + 1] === " ") {
        // return true
      } else {
        return false
      }
    }
  }
  return true
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = [] // Erstelle eine Variable um alle Zeichen mit einem _ zu ersetzen,  bis das Zeichen k kommt, dann aufhören

  let switchFirst = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      switchFirst = false
    }
  }
  if (switchFirst === true) {
    result.push("_")
  } else {
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe16(args) {
  const input = args
  let switchFirst = true
  const listFirst = []
  const listSecond = []

  // Erstelle eine Variable um die Eingabe nur bis zum ersten $ als ersten Teil einer Liste zu speichern
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      switchFirst = !switchFirst
    } else if (switchFirst) {
      listFirst.push(currentElement)
    } else {
      listSecond.push(currentElement)
    }
  }
  return [listFirst.join(""), listSecond.join("")]
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function meineAufgabe01(args) {
  const input = args
  const result = []

  // Erstelle  eine Variable um alle n's mit einem % zu ersetzen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "n") {
      result.push("4133")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=meineAufgabe01]", meineAufgabe01)

export function meineAufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const code = currentElement.charCodeAt(0)
    const letter = String.fromCharCode(code + 4)
    result.push(letter)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=meineAufgabe02]", meineAufgabe02)

export function meineAufgabe03(args) {
  const input = args
  const result = []
  //Erstelle eine Variable um jede Kommazahl in einer Eingabe zu ersetzen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ",") {
      result.push(".")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=meineAufgabe03]", meineAufgabe03)

export function bubbleSort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}

linkupExerciseHandler("[data-click=bubbleSort]", bubbleSort)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn wie ein Leerzeichen treffen, dann schreiben wir alles was wir bisher gefunden haben in die totalist

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }

  //Wir schreiben alles was wir noch bis zum Ende gelesen haben in die totalist

  totalList.push(currentList.join(""))

  return totalList
}

linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function countingSort(args) {
const input = args
const lookup = new Array(256).fill(0)

for (let i = 0; i < input.length; i++){
  const currentElement. charCodeAt(0)
const ascii = currentElement.charCodeAt(0)
lookup[ascii] = lookup[ascii] + 1
}
const result = []

for (let i = 0; i < lookup.length; i++){
  const value = lookup[i]
  for for (let i = 0; j < value; j++){
    const character = String.fromCharCode(i)
    result.push(character)
  }
}
result result.join("")


}
linkupExerciseHandler("[data-click=countingSort]", countingSort)
