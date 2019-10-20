import React from 'react'
import Layout from '../components/Layout'

const Tetete = () => (
    <Layout>
        <section 
            className="main background-color-main content"
            style={{
                height: '90vh',
            }}
        >
            <div className="full-height align-items-center">
                    <h1 className="has-text-primary">
                        お金が貰える・<br className="mobile-br" />戻ってくるかも？<br />申請したい手続きや制度まとめ
                    </h1>
            </div>
        </section>


        <section 
            className="main content"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        病気・ケガ
                    </h2>
                    <h3>もらえる</h3>
                    <h3>もどってくる</h3>
            </div>
        </section>


        <section 
            className="main content background-color-main"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        結婚
                    </h2>
                    <h3>もらえる</h3>
                    <h3>もどってくる</h3>
            </div>
        </section>


        <section 
            className="main content"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        出産
                    </h2>
                    <h3>もらえる</h3>
                    <h3>もどってくる</h3>
            </div>
        </section>
        
    </Layout>
)

export default Tetete;