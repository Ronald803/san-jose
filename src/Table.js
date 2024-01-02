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
        {
          manzano: 24,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1Jh32KfpO5RvjAPMkI_gYI9hk81DC1egj/view?usp=drive_link"
        },
        {
          manzano: 24,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1fMY7hz9akoVqPGPQjxf3EGbiNc5tHXYG/view?usp=drive_link"
        },
        {
          manzano: 25,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1f-sAxMzch_iwWa8xv-tfxOZHggcV7Idm/view?usp=drive_link"
        },
        {
          manzano: 25,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1ePSDC3usT7x2MaPgZgyEEQd8GB-SOSN9/view?usp=drive_link"
        },
        {
          manzano: 25,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1em7AmoxR60R7ln3IBD3_mu2485pn1w-L/view?usp=drive_link"
        },
        {
          manzano: 25,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1YG1TLZX5rQ5pzrNYCF9zve83hw2X2Gir/view?usp=drive_link"
        },
        {
          manzano: 25,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1VJVJXDg7BoMBldgYU2UZ2uczipbmigsq/view?usp=drive_link"
        },
        {
          manzano: 25,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/1EkfixGXtD-J3dOTBSCuOiFvcz3a7UmQD/view?usp=drive_link"
        },
        {
          manzano: 27,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1wHuKOAuA2zvRtIdtGuRZ8PTv50V9QKiv/view?usp=drive_link"
        },
        {
          manzano: 27,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1Xj2R4uRq7Prdz-aDgBc7kiscBn_5A-C9/view?usp=drive_link"
        },
        {
          manzano: 27,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1RQcOWtGZGU0QgQ-VnSqhknnMsdJiGyXM/view?usp=drive_link"
        },
        {
          manzano: 27,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/19FgGg45d20cvj0J4rdTpRLcwX5BAJxio/view?usp=drive_link"
        },
        {
          manzano: 27,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1bsQQibKYgxcbZlwUGfUCiUTAvRCBf4Eb/view?usp=drive_link"
        },
        {
          manzano: 28,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1aGhuMCEY9u78i2e0z6Slu3jcUd39PAiK/view?usp=drive_link"
        },
        {
          manzano: 28,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1xf64kF114ZTrG_QBsabrELgfG39XwURh/view?usp=drive_link"
        },
        {
          manzano: 28,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1WFwwVSOhYCdnjEgD7c6-Rk4t6NqFv9Fj/view?usp=drive_link"
        },
        {
          manzano: 29,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1A0FZxb7J43OB_wxnICIvh8fiqyKpG7JM/view?usp=drive_link"
        },
        {
          manzano: 29,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1ikTx5cYLI2TRRYb_MBHKOwvLBLaRYH8D/view?usp=drive_link"
        },
        {
          manzano: 30,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1d3y39tWYPxUCO3aCuBQ_enZ4vHwSsinG/view?usp=drive_link"
        },
        {
          manzano: 30,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1Z9HhPVYKKiMlGIXTN3fHTfaRgtS-XUN1/view?usp=drive_link"
        },
        {
          manzano: 30,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/15vwYzqoJ30YVzIMXhSFQCqPMkbmuQJ2Z/view?usp=drive_link"
        },
        {
          manzano: 30,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1FGHW4xB5LX7Q7jxslRyiEVijbJa-TKye/view?usp=drive_link"
        },
        {
          manzano: 33,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1kJYBOvIegyIFVxQ2BTSwOY1sjzWeVVvE/view?usp=drive_link"
        },
        {
          manzano: 33,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/189wMoBB7Kdd3v4LZuRJg866s7AfEfCDY/view?usp=drive_link"
        },
        {
          manzano: 33,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/16sdZnKXGCQQMUGNpUeW-9bLCuX9wV2j_/view?usp=drive_link"
        },
        {
          manzano: 33,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1B1jFkcO5WLRQcSIpL3GinLFtgu4X-xkU/view?usp=drive_link"
        },
        {
          manzano: 34,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1Pi3ymqlX-Sk_gSW_50dJLR0_f21-A1bo/view?usp=drive_link"
        },
        {
          manzano: 34,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/18goymjva4R-51nbdAq9GfATkWRknQAr7/view?usp=drive_link"
        },
        {
          manzano: 34,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1DQ2WeBXyx1C-jrn-zQMEPh_yDEpexGqC/view?usp=drive_link"
        },
        {
          manzano: 34,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1ogGbTuIjsJNdP66p9rS1jmRm4xaI4Dsl/view?usp=drive_link"
        },
        {
          manzano: 35,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/13a8qNkk7M-r_xVRRSPSjiIQ3pbuWAvBb/view?usp=drive_link"
        },
        {
          manzano: 35,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1RTFtMcvugWeXykNFUceUPCwWiQtiUHq2/view?usp=drive_link"
        },
        {
          manzano: 35,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/116ZAzqpVdBRxnxJtxoWA5leKKtPfJjVw/view?usp=drive_link"
        },
        {
          manzano: 35,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1rj_MeVhGi-l95JH1FGgax93E9Bcbh82k/view?usp=drive_link"
        },
        {
          manzano: 36,
          lote: 1,
          zona: "general",
          url: "https://drive.google.com/file/d/1-we_X-ijAedJw0F9p5erlbOTh0yK-98s/view?usp=drive_link"
        },
        {
          manzano: 36,
          lote: 2,
          zona: "general",
          url: "https://drive.google.com/file/d/1_v1sD7mZC0AJqTAMFoxWmWXjWFa22gR3/view?usp=drive_link"
        },
        {
          manzano: 36,
          lote: 3,
          zona: "general",
          url: "https://drive.google.com/file/d/1K3ipWJpKjTTj8oxCuarN8lFNDqpcu1oR/view?usp=drive_link"
        },
        {
          manzano: 36,
          lote: 4,
          zona: "general",
          url: "https://drive.google.com/file/d/1BogmiqyQTDvM2IU2yYpAyifS-6tVuxhP/view?usp=drive_link"
        },
        {
          manzano: 36,
          lote: 5,
          zona: "general",
          url: "https://drive.google.com/file/d/1wAyFMjxH38kMQ4ayb7nm3rYqY3CdHQUd/view?usp=drive_link"
        },
        {
          manzano: 36,
          lote: 6,
          zona: "general",
          url: "https://drive.google.com/file/d/17o-30Q0y7Jd6ozgRjl11foOCquL09zA1/view?usp=drive_link"
        },
        {
          manzano: "A",
          lote: 1,
          zona: "Norte",
          url: "https://drive.google.com/file/d/1RTO3OoJDK0iBuuoIvTb56wcNPC-wPyZS/view?usp=drive_link"
        },
        {
          manzano: "A",
          lote: 2,
          zona: "Norte",
          url: "https://drive.google.com/file/d/1Q2CaKaXZrRuQ-tTV6dgrg4ly6UvlVWiz/view?usp=drive_link"
        },
        {
          manzano: "A",
          lote: 3,
          zona: "Norte",
          url: "https://drive.google.com/file/d/1bV5kShVU0McATIOI18ZeYzhnL-7Sx5CS/view?usp=drive_link"
        },
        {
          manzano: "A",
          lote: 4,
          zona: "Norte",
          url: "https://drive.google.com/file/d/1FN3v6qVuy6o16NgrBWPxh8vC3KVkEeiu/view?usp=drive_link"
        },
        {
          manzano: "B",
          lote: 2,
          zona: "Norte",
          url: "https://drive.google.com/file/d/1cwSqcKsIrpWsLPcgCbr0Igh8zMPKC-wD/view?usp=drive_link"
        },
        {
          manzano: "B",
          lote: 3,
          zona: "Norte",
          url: "https://drive.google.com/file/d/1e8lGd2I43VP0qKPM0LqMXeCtr6cx0RUo/view?usp=drive_link"
        },
        {
          manzano: "Complemento",
          lote: 0,
          zona: "Norte",
          url: "https://drive.google.com/file/d/1OuziAirQoOaydXYk5gN3RD1z_5s9-3GT/view?usp=drive_link"
        },
        {
          manzano: 6,
          lote: 1,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1FNAwBjb0UYge51urrp7VHCHC3cmQ-KFz/view?usp=drive_link"
        },
        {
          manzano: 6,
          lote: 2,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1eGYfStCsnolgrTFF1_tV0ccl-AHbtOoF/view?usp=drive_link"
        },
        {
          manzano: 6,
          lote: 3,
          zona: "Sur",
          url: "https://drive.google.com/file/d/12MBa9ujErLDlJ-REj5YCk6Y50KaKbaSi/view?usp=drive_link"
        },
        {
          manzano: 6,
          lote: 4,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1Rs4vj4kv-rGWmBrlr8i8OFbk94rYObRG/view?usp=drive_link"
        },
        {
          manzano: 7,
          lote: 1,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1wZTAJxs5RQLsu6ROtQwoMSwjML6-mDYu/view?usp=drive_link"
        },
        {
          manzano: 7,
          lote: 2,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1YanFgj-O2_YiVgO-McRq4HwiUda9kkXZ/view?usp=drive_link"
        },
        {
          manzano: 7,
          lote: 3,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1VuTQ_VoC-BhNDNDkegb9Al66J6tkLzs2/view?usp=drive_link"
        },
        {
          manzano: 7,
          lote: 4,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1r9C6AdxrYZ-mSEY3GvYHLNiU8gEk-qsB/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 1,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1cfWTiXblAn5xKYCrRi-LHGidm-nkaC_j/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 2,
          zona: "Sur",
          url: "https://drive.google.com/file/d/112xyE41_CA23ESMyJF7_yrada5NGuhJV/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 3,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1JZOaFVBc9xODEg_lLKSYl903NkjR40U7/view?usp=drive_link"
        },
        {
          manzano: 8,
          lote: 4,
          zona: "Sur",
          url: "https://drive.google.com/file/d/1Cs3WzYmnvV6a40gV-YlgAO3Nv3KTJoHs/view?usp=drive_link"
        }
    ]
    const urlGeneral1 = "https://drive.google.com/file/d/1nTB80tAk23yUwgwAcT909K9q8OgN7k9C/view?usp=drive_link"
    const urlGeneral2 = "https://drive.google.com/file/d/1hMZ2aYgC-9FAVHMt0S2vOK7RdGGkapZr/view?usp=drive_link"
  return (
    <div>Table</div>
  )
}

export default Table