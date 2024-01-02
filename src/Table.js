import React from 'react'

function Table() {
    const planes = [
        {
            manzano: 1,
            lote: 1,
            zona: "general",
            url: "https://drive.google.com/file/d/1RDGMWnd2p-M45ftNJZMikyB0U0MRzaiJ/view?usp=drive_link"
        },
        {
          manzano: 1,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1l5_7BOUcr_VjEWOW0A9eAKRUc0ZpNVaY/view?usp=sharing"
        },
        {
          manzano: 1,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1Shqt3RZ_H1f97486TD3yK-71-dvjrjXP/view?usp=sharing"
        },
        {
          manzano: 1,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1d7RdDtPGMukx-j_htsf8GUgm62bd5lhd/view?usp=sharing"
        },
        {
          manzano: 1,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1tbR7OdzP1l2jmvXHwWWsQHtzeCuk5Dga/view?usp=sharing"
        },
        {
          manzano: 1,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/1ufdHdF5xxlpErvJ1ui_zgoAXLF8USW7w/view?usp=sharing"
        },
        {
          manzano: 3,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1EbCugVBC2r0GLA3J1JtejPBhfnlgEoNv/view?usp=sharing"
        },
        {
          manzano: 3,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/19MsqpmFaNmkG9XgxClD6Kspm9swllMJs/view?usp=drive_link"
        },
        {
          manzano: 4,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1Z-qLzjgRbTixwbzxYmxhkjhtg6jcYCqL/view?usp=sharing"
        },
        {
          manzano: 7,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1DAvboHK13LTgTNHm8_RE-snoGechmRLi/view?usp=sharing"
        },
        {
          manzano: 7,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1IMX6Yp7hzHrtjlkuoHBGva08F15RD8XT/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1ylMaOIeASecp7YDjpLCQhMgw8YoiVfr5/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1E-JZ19lskakA2Lv7AAEleIaohSwwvBfG/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1jN6QX8WDvuWt1SrUCBUyI0qdCJ7EINUb/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1hXPcYORSvCS_KLdMOL7UGR9gubnLb03c/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1-EYWS4rw3hjDkpDR4xJwnPiPTQYdma0b/view?usp=drive_link"
        },
        {
          manzano: 9,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1FxpsJfgXTjASqv1MuilgtVyuuUz9g1Bv/view?usp=drive_link"
        },
        {
          manzano: 9,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1_pDAqOWJSEu78a7vKAp_mf_LQ3GrTbHS/view?usp=drive_link"
        },
        {
          manzano: 10,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1EbIUi4X__qZtMAV2J6Rp1ovg2rZJ5s9b/view?usp=drive_link"
        },
        {
          manzano: 10,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1E30ahdNuEGzZsI6RkAURF-5UpRzoq5gs/view?usp=drive_link"
        },
        {
          manzano: 11,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1gLTYO6e0M3vG7r4RRt1PhOUuJdh8Z6uB/view?usp=drive_link"
        },
        {
          manzano: 11,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1u88F5xpGqlqVscJAnj-tt-UepAvZGpU9/view?usp=drive_link"
        },
        {
          manzano: 12,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1vYSNaITOzwcVrY5o80KDCnF-bRMB4PM0/view?usp=drive_link"
        },
        {
          manzano: 12,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1RAFaftzMMHySPrrOAc8s5iyJB7bh2kv4/view?usp=drive_link"
        },
        {
          manzano: 12,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/16-VhxVkJ8JWldMjDQcasRqhaYxzH2B1R/view?usp=drive_link"
        },
        {
          manzano: 12,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1ewoO9IMh0qju4bg3GdfIPhxmLWLrweUq/view?usp=drive_link"
        },
        {
          manzano: 12,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/1WmQuMPWyYMIXoKZnx1mGKsVODJsRXQD1/view?usp=drive_link"
        },
        {
          manzano: 12,
          lote: 7,
          zona: "general",
          url: "https://drive.google.com/file/d/11alo1pwHbW70339MCbCXz-G1IkfwuOtE/view?usp=drive_link"
        },
        {
          manzano: 12,
          lote: 8,
          zona: "general",
          url: "https://drive.google.com/file/d/1yNoDoXNBh8S7CVwlaB6vm1U-RJNYcdDu/view?usp=drive_link"
        },
        {
          manzano: 13,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1rwaP4zqbwuckoiFyJFC3beYRtyz86D-R/view?usp=drive_link"
        },
        {
          manzano: 13,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1U26E7Nb9UalLPnL9ZDV16ZTYPPkLvnZR/view?usp=drive_link"
        },
        {
          manzano: 13,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1kz5hlfddKbpq4vLFTtMGoql64WcB2JBB/view?usp=drive_link"
        },
        {
          manzano: 13,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1nD5hFaarTiG3UpwcaSpbMmuD7sDiV9Er/view?usp=drive_link"
        },
        {
          manzano: 13,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1uNeFkSTDswL263DJwtEWOOcgYslmcHjI/view?usp=drive_link"
        },
        {
          manzano: 13,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/1U1doWloVXVkamR7gIodGft9ePUk7F6SX/view?usp=drive_link"
        },
        {
          manzano: 13,
          lote: 7,
          zona: "general",
          url: "https://drive.google.com/file/d/1ibTCs1ZBuPPB67l-vxQVwW8fB7PRLyfz/view?usp=drive_link"
        },
        {
          manzano: 13,
          lote: 8,
          zona: "general",
          url: "https://drive.google.com/file/d/1IuX23WuwlEoHhlSAvnPD_Ir5CuXifc9J/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/19mGmwxNdmRuN2qyaktygv8wKmot2COEp/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1ubppFpi_75UHaxvbyFLPsHe52_GutY_T/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1GRTPIIe_SevtBgWI_GqyHb5wCsZhvdlK/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1goHCDSP2CDloJxmQ6yKimJkndBBdkajs/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1EyzaZ1LKyJZg3pPhuzEWvwAHfqFyrPXp/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/16pTq94aUkrfrCBj0_zSx52gGuWXu9Qeb/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 7,
          zona: "general",
          url: "https://drive.google.com/file/d/1YfMqJSwbb_Ya0k_ENLMl7iUMZsUwLgDJ/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 8,
          zona: "general",
          url: "https://drive.google.com/file/d/1OZpPkg8df864D55dkmhoLtUacSzgz-8R/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 9,
          zona: "general",
          url: "https://drive.google.com/file/d/11KfLbSA8GlAHNse5UEcepXsLTjKBSNW2/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 10,
          zona: "general",
          url: "https://drive.google.com/file/d/1YaX7qJOFOjtmZN9kN4OV-AJUgjijAxcC/view?usp=drive_link"
        },
        {
          manzano: 14,
          lote: 11,
          zona: "general",
          url: "https://drive.google.com/file/d/1Guq1DrLmVCMRBIXm7YhWdtn7W2d8qRTQ/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/154GQtBbZ34uvmxD0TDIHfNYrDI8CNYJG/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1XmhvHfiVb6lcbQXJ26nur7zlpe42GBpC/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1KPTbq9hzgIsPL-t4Tvd_r3IXSIX51dyk/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1AWiNvUlnr_kNtROr_DS7OC7qADQDkGKQ/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1cbIUzPiXzOoW-FV9UUQ_x-NrNuoJ2QRZ/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/1Bb44ERY-ffM3vhvPs7zdd9u-BixBmE3P/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 7,
          zona: "general",
          url: "https://drive.google.com/file/d/1FmPI62H8WGofSRhfbZE25yIYirFiUR5o/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 8,
          zona: "general",
          url: "https://drive.google.com/file/d/1Dc-zvCP1dNoEgMQYEsDmymJEan40I68P/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 9,
          zona: "general",
          url: "https://drive.google.com/file/d/1kU83OE5zRLuIx7SZJ5Gmhz7kPYZCjVzZ/view?usp=drive_link"
        },
        {
          manzano: 15,
          lote: 10,
          zona: "general",
          url: "https://drive.google.com/file/d/1uI7gh-_S-1zAn38iuJV_94JWTH8hUM7t/view?usp=drive_link"
        },
        {
          manzano: 17,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1s2aJp-WxNJD3MSbtfQiNN8PAXtezGvp8/view?usp=drive_link"
        },
        {
          manzano: 17,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1aGI08zKIi7MdeAyklA6mm2wLATehixwk/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1htpGpP-K7jfGxTaneHc_JRRkKihCBQpF/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1YaMdGs9m-Dmc35-GdlDy-EWEVrP3onJ1/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1F7BThsTMqiP2Cl5kdom5IINVdxjIOQgB/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1mwbQpTPp-_s150RozKJ8vubUh1-hMm3i/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1NRJyrhazqzsUE2Di-rx6_RBwmk2RCYnO/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/1aJ-Zr_ofKoOPrIrmtJUMWdWqrERQPt-u/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 7,
          zona: "general",
          url: "https://drive.google.com/file/d/1QEEFsrJ3dM5kILw06a6qcE7nUqFaoj6Y/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 8,
          zona: "general",
          url: "https://drive.google.com/file/d/1ORrltxMcbLQIwqJa-stzvDBbcckLz7LN/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 9,
          zona: "general",
          url: "https://drive.google.com/file/d/196bQI0rV5g4ZrcjR9w8V8_3fB3lnLymf/view?usp=drive_link"
        },
        {
          manzano: 18,
          lote: 10,
          zona: "general",
          url: "https://drive.google.com/file/d/1si3OOhEWxE-SF5pBlbhwcJUQ7FE6MyaT/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1IH2LqwFOJb83VBtwMcNCscKqZS0FD-8l/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1QetE8WDrQcE6Qdffmoo0fnE1opsGVjFT/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1skBDeQhbGieqV_zOIfU4vjogL6FexEzf/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1Ty6lEbQHqCyxLOwwGrRNXetPjNLKSStH/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1_gihUKITPrHY3cx9sk8XjSqsyZwp9e5v/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/1hzG70Jecg1U-X5qgkuO3qlnbatZgnBrA/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 7,
          zona: "general",
          url: "https://drive.google.com/file/d/1AO6mZmaAD4g7ok4Vl_1IXLmAgEdXW51A/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 8,
          zona: "general",
          url: "https://drive.google.com/file/d/1w6h74Byc65XMb9LCSeKVxLtz1KhWGU-O/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 9,
          zona: "general",
          url: "https://drive.google.com/file/d/1T_hWxdSpvokf1tFXdJuyZMXjcYBEnoRl/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 10,
          zona: "general",
          url: "https://drive.google.com/file/d/1lkPzokN95XXrGGbvVvAdY-nOFqAq2iQc/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 11,
          zona: "general",
          url: "https://drive.google.com/file/d/1dqy-fweLiq-DwjVI4E3vLsjhFIlHCY5j/view?usp=drive_link"
        },
        {
          manzano: 19,
          lote: 12,
          zona: "general",
          url: "https://drive.google.com/file/d/1r57dJtTeegFlUTI0wDpEjK63d7Y-8fkC/view?usp=drive_link"
        },
        {
          manzano: 20,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1WjA7-ZvMPwvSlAyPrGKlNvdfCcgBUloU/view?usp=drive_link"
        },
        {
          manzano: 20,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1iDKm1Q6WlACtV-chko-8C21bxROKGBzD/view?usp=drive_link"
        },
        {
          manzano: 21,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1rUlu2Twk0fH1cu7p3rZ8ogq_KZgGSz8G/view?usp=drive_link"
        },
        {
          manzano: 21,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1oXqBsGZRYVMJvyDKggNbqoHza0-Hp1AI/view?usp=drive_link"
        },
        {
          manzano: 21,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1zUGtOB2LFitxGqSznmlfLZFmCGAEUHmw/view?usp=drive_link"
        },
        {
          manzano: 21,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1puXWcatP7QjMHtx3T7ZHnDFvDzzk9Ay1/view?usp=drive_link"
        },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
        // {
        //   manzano: ,
        //   lote: ,
        //   zona: "general",
        //   url: ""
        // },
    ]
  return (
    <div>Table</div>
  )
}

export default Table