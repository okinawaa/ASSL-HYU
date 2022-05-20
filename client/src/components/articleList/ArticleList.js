import React from 'react';
import {ArticleListContainer, ArticleTextContainer} from "./acticleListStyles";

function ArticleList({alumni}) {


    let contents;

    if(alumni){
        contents = [
            {
                num: "◾",
                desc: "Dong Jun Kim, Ph-D, ADD(Agency for depend development)"
            },
            {
                num: "◾",
                desc: "Seung Hyun No, JM medical"
            },
            {
                num: "◾",
                desc: "Jin su Park, SK"
            },
            {
                num: "◾",
                desc: "Tae Hyung Kim, LIG"
            },
            {
                num: "◾",
                desc: "Seung Bin Song, EO technics"
            },
            {
                num: "◾",
                desc: "Eun Hye Han, go"
            },
            {
                num: "◾",
                desc: "Jong geun Shin, EO technics"
            },
            {
                num: "◾",
                desc: "Jung Sub Lee, EO technics"
            },
            {
                num: "◾",
                desc: "Jae Hoon Lee, Hanhwa"
            },
            {
                num: "◾",
                desc: "Jin Hoo Lee, Lutronic"
            },
            {
                num: "◾",
                desc: "Ye Ji Jung, Hanhwa"
            },
            {
                num: "◾",
                desc: "Sang Min Ann, go abroad"
            },
            {
                num: "◾",
                desc: "Eun Ji Park, LIG"
            },
            {
                num: "◾",
                desc: "Jin Pil Kim, EO techincs"
            }
        ]
    }else{
        contents = [
            {
                num: "1.",
                desc: "J. W. Kim, P. Jelger, J. K. Sahu, F. Laurell, and W. A. Clarkson, \"High-power and wavelength-tunable operation of an Er, Yb fiber laser using a volume Bragg grating,“ Opt. Lett. 33,1204 (2008)."
            },
            {
                num: "2.",
                desc: "J. W. Kim, D. Y. Shen, and W. A. Clarkson, \"Fiber-laser-pumped Er: YAG lasers,\" IEEE J. of Sel. Top. in Quantum Electron. 15, 361 (2009). - Invited paper"
            },
            {
                num: "3.",
                desc: "J. W. Kim, J. I. Mackenzie, and W. A. Clarkson, “Influence of energy-transfer-upconversion on threshold pump power in quasi-three-level solid-state lasers,” Opt. Express 17, 11935 (2009)."
            },
            {
                num: "4.",
                desc: "L. Pearson, J. W. Kim, Z. Zhang, M. Ibsen, J. K. Sahu, and W. A. Clarkson, \"High-power single-frequency thulium-doped fiber Master-Oscillator Power-Amplifier,\" Opt. Express 18, 1607 (2010)."
            },
            {
                num: "5.",
                desc: "D. J. Kim, J. W. Kim, and W. A. Clarkson, “Q-switched Nd: YAG optical vortex lasers,” Optics Express 17, 11935 (2013)."
            },
            {
                num: "6.",
                desc: "D. J. Kim and J. W. Kim, “Direct generation of an optical vortex beam in a single-frequency Nd:YVO4 laser,” Optics Letters 40, 339 (2015)."
            },
            {
                num: "7.",
                desc: "D. J. Kim, J. W. Kim, and J. I.. Mackenzie, “Adaptable beam profiles from a dual-cavity Nd:YAG laser,” Optics Letters 41, 1740 (2016)."
            },
            {
                num: "8.",
                desc: "D. J. Kim, S. H. Noh, S. M. Ahn, and J. W. Kim,” Influence of a ring-shaped pump beam on temperature distribution and thermal lensing in end-pumped solid state lasers,” Opt. Express 25, 14668 (2017)."
            },
        ]
    }



    return (
        <ArticleListContainer>
            {
                contents.map((item,index) => (
                    <ArticleTextContainer key={index}>
                        <div>{item.num}</div>
                        <div>{item.desc}</div>
                    </ArticleTextContainer>
                ))
            }
        </ArticleListContainer>
    );
}

export default ArticleList;