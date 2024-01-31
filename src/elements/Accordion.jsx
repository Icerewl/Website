import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class Accordion01 extends Component {
    render(){
        return(
            <Accordion className="accodion-style--1" preExpanded={'0'}>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Yaklaşan Gösterilerimiz ve Programlar
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>En son tiyatro oyunlarımız, stand-up gösterileri ve özel etkinlik takvimleri hakkında tüm bilgiler.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Tiyatro Tarihçemiz ve Sanatsal Yolculuğumuz
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Kuruluşumuzdan bu yana tiyatro sanatına olan bağlılığımız ve sahnelediğimiz unutulmaz eserler.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Topluluk Katılımı ve Eğitim Programları
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yerel toplulukla etkileşimimiz, gençlere yönelik atölye çalışmalarımız ve eğitim programlarımız.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Tiyatroda Teknoloji ve Yenilikler
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sahne sanatlarında teknolojinin rolü, yenilikçi prodüksiyonlarımız ve sanatsal yaklaşımlarımız.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
        )
    }
}

export default Accordion01;
