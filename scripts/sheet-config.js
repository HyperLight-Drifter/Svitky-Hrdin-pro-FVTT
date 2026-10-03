/**
 * Svitky Hrdinů - Sheet Configuration
 * Automatically applies the PbtA sheet configuration when the module loads.
 */

Hooks.once('pbtaSheetConfig', () => {

  // Apply the full sheet configuration
  game.pbta.sheetConfig = {
    rollFormula: "2d10",
    rollShifting: true,
    statToggle: {
      label: "Následek",
      modifier: -1
    },
    rollResults: {
      failure: {
        start: null,
        end: 14,
        label: "Neúspěch"
      },
      partial: {
        start: 15,
        end: 19,
        label: "Částečný úspěch"
      },
      success: {
        start: 20,
        end: null,
        label: "Kompletní úspěch"
      }
    },
    actorTypes: {

      // ----------------------------------------
      // CHARACTER
      // ----------------------------------------
      character: {
        stats: {
          nezd: { label: "Nezdolnost" },
          hbit: { label: "Hbitost" },
          srd:  { label: "Srdnatost" },
          duv:  { label: "Důvtip" },
          lst:  { label: "Lstivost" }
        },
        attributes: {
          // Top attributes
          zbroj: {
            type: "Resource",
            label: "Zbroj",
            position: "top"
          },
          vitalita: {
            type: "Resource",
            label: "Vitalita",
            position: "top"
          },
          odhod: {
            type: "Resource",
            label: "Odhodlání",
            position: "top"
          },
          exp: {
            type: "Resource",
            label: "Zkušenosti",
            position: "top"
          },
          // Left attributes
          svitky: {
            type: "LongText",
            label: "Svitky",
            position: "left"
          },
          lehkynasledek: {
            type: "LongText",
            label: "Lehké Následky",
            position: "left"
          },
          Nasledek1: {
            type: "Clock",
            label: "První následek",
            max: 6,
            default: 0,
            position: "left"
          },
          Nasledek2: {
            type: "Clock",
            label: "Druhý následek",
            max: 6,
            default: 0,
            position: "left"
          },
          Nasledek3: {
            type: "Clock",
            label: "Třetí následek",
            max: 6,
            default: 0,
            position: "left"
          },
          tezkynasledek: {
            type: "Text",
            label: "Těžký následek",
            position: "left"
          }
        },
        moveTypes: {
          race:   { label: "Dovednosti rodu" },
          class:  { label: "Dovednosti povolání" },
          spells: { label: "Kouzla" },
          basic:  { label: "Základní tahy" }
        },
        equipmentTypes: {
          body:     { label: "Vybavení (v ruce, na sobě)" },
          hand:     { label: "Po ruce" },
          backpack: { label: "Batoh" },
          purse:    { label: "Měšec" },
          hex:      { label: "Dočasné hexy" }
        }
      },

      // ----------------------------------------
      // NPC
      // ----------------------------------------
      npc: {
        attributes: {
          armor: {
            type: "Resource",
            label: "Zbroj",
            position: "top"
          },
          vydrz: {
            type: "Resource",
            label: "Výdrž",
            position: "top"
          },
          damage: {
            type: "Text",
            label: "Poškození",
            position: "top"
          }
        },
        moveTypes: {
          npchard:    { label: "Tvrdé tahy" },
          npcmighty:  { label: "Mocné tahy" },
          npcspecial: { label: "Zvláštní schopnosti" }
        },
        equipmentTypes: {
          treasure: { label: "Vybavení a poklad" }
        }
      },

      // ----------------------------------------
      // SPOLEČNÍK (Companion)
      // ----------------------------------------
      spol: {
        label: "Společník",
        baseType: "character",
        stats: {
          nezd: { label: "Nezdolnost" },
          hbit: { label: "Hbitost" },
          srd:  { label: "Srdnatost" },
          duv:  { label: "Důvtip" },
          lst:  { label: "Lstivost" }
        },
        attributes: {
          armor: {
            type: "Resource",
            label: "Zbroj",
            position: "top"
          },
          hp: {
            type: "Resource",
            label: "Výdrž",
            position: "top"
          },
          damage: {
            type: "Number",
            label: "Zranění",
            position: "top"
          }
        },
        moveTypes: {
          spolecnik: { label: "Dovednosti společníka" },
          spells:    { label: "Kouzla" }
        },
        equipmentTypes: {
          inventory: { label: "Inventář" }
        }
      }

    }
  };

});
