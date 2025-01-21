import React from "react";

const Home = () => {
  return (
    <div>
      <div className="pos_relative lg:mx_auto lg:max-w_1480 h_calc(100svh_-_64px) lg:h_calc(100vh_-_90px)">
        <div
          className="styles_section"
          style={{ backgroundColor: "lightblue" }}
        >
          <div
            className="d_flex items_center landscape:items_flex-start pos_absolute flex_column text-align_center 
      landscape:text-align_left landscape:top_calc(50svh_-_64px) landscape:lg:top_calc(50svh_-_90px) bottom_40 
      landscape:bottom_auto left_0 landscape:left_40 landscape:lg:left_80 right_0 mx_auto 
      landscape:transform_translateY(-50%) z_1 md:min-w_490"
          >
            {/* Title Section */}
            <h1 className="textStyle_jpHeading22 md:textStyle_jpHeading40 lg:textStyle_jpHeading48">
              Valuation &nbsp;
              <br className="d_none landscape:d_block lg:d_block md:d_block" />
              Private Equity
              <br />
              Dneuro
            </h1>

            {/* Description Section */}
            <p className="textStyle_body12 md:textStyle_body16 mt_12 md:mt_16 lg:mt_24">
              Bloomo
              <span className="textStyle_body12Sub md:textStyle_body16Sub">
                （ブルーモ）
              </span>
              は、他の投資家をコピーしつつ
              <br />
              簡単に米国株・ETFで資産運用できる
              <br className="d_block md:d_none landscape:d_block lg:d_block" />
              新しい投資アプリ（証券会社）です
            </p>

            {/* Button Section */}
            <div className="d_flex mt_24 md:mt_32 lg:mt_40 flex_column">
              <p className="mb_12 lg:mb_16 textStyle_jpLabel14 md:textStyle_jpLabel16 fw_bold text_accentBlue1 text-align_center">
                約2分で口座開設申込み完了
              </p>
              <a className="styles_button" href="#">
                アプリをダウンロード
              </a>
            </div>
          </div>
        </div>
        <div
          className="pos_absolute 
          right_auto 
          landscape:right_2% 
          left_50% 
          landscape:left_auto top_calc(33svh_-_64px) 
          md:top_calc(33svh_-_64px) 
          landscape:top_calc(50svh_-_64px) 
          landscape:lg:top_calc(50svh_-_90px) 
          bottom_auto 
          transform_translate(-50%,_-50%) 
          landscape:transform_translateY(-50%) 
          w_80vw 
          md:w_70vw 
          landscape:w_65vw 
          landscape:h_auto 
          max-h_calc((33svh_-_64px)_*_2) 
          md:max-h_calc((33svh_-_64px)_*_2) 
          landscape:max-h_calc((50svh_-_64px)_*_2) 
          landscape:lg:max-h_calc((50svh_-_90px)_*_2) 
          landscape:max-w_65vw 
          landscape:lg:max-w_962"
        >
          <img
            alt=""
            loading="lazy"
            width="962"
            height="820"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="https://static.bloomo.co.jp/_next/static/media/onboarding.7d65dd99.png"
          />
        </div>
      </div>
      <div className="styles_section">
        <div className="styles_module_1">
          <div>
            <div>
              <h2 className="styles_heading_fs_28">Bloomo（ブルーモ）とは</h2>
            </div>
            <p className="styles_description styles_paragraph">
              Bloomo（ブルーモ）は、 ポートフォリオをコピーして、
              <strong className="styles_marker__25l_e">
                簡単に米国株・ETFで資産運用できるアプリ
              </strong>
              です。
              <br />
              他の投資家をコピーしつつ、自分の好きな銘柄も加えたポートフォリオを作成して入金するだけ。これまでの両替・売買などの面倒な手続きもブルーモが代わりに実行してくれます。
            </p>

            <div className="styles_pressSectionPC">
              <div className="styles_press">
                <img
                  alt="日本経済新聞社のロゴ"
                  loading="lazy"
                  width="165"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_nikkei"
                  src="https://static.bloomo.co.jp/_next/static/media/nikkei.8094b509.png"
                />
                <img
                  alt="Forbesのロゴ"
                  loading="lazy"
                  width="143"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_forbes"
                  src="https://static.bloomo.co.jp/_next/static/media/forbes.9a2253d1.png"
                />
                <img
                  alt="ITmediaのロゴ"
                  loading="lazy"
                  width="139"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_itmedia"
                  src="https://static.bloomo.co.jp/_next/static/media/itmedia.39444495.png"
                />
                <img
                  alt="日経クロストレンドのロゴ"
                  loading="lazy"
                  width="189"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_xtrend"
                  src="https://static.bloomo.co.jp/_next/static/media/xtrend.17d72e8d.png"
                />
                <img
                  alt="日経トレンディのロゴ"
                  loading="lazy"
                  width="107"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_trendy"
                  src="https://static.bloomo.co.jp/_next/static/media/trendy.23f76d9e.png"
                />
                <img
                  alt="日経CNBCのロゴ"
                  loading="lazy"
                  width="65"
                  height="68"
                  decoding="async"
                  data-nimg="1"
                  className="styles_nikkei_cnbc"
                  src="https://static.bloomo.co.jp/_next/static/media/nikkei_cnbc.234b689d.png"
                />
              </div>
              <div className="styles_press">
                {" "}
                <img
                  alt="ASCIIのロゴ"
                  loading="lazy"
                  width="210"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_ascii"
                  src="https://static.bloomo.co.jp/_next/static/media/ascii.15925969.png"
                />
                <img
                  alt="WBSのロゴ"
                  loading="lazy"
                  width="115"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  className="styles_wbs"
                  src="https://static.bloomo.co.jp/_next/static/media/wbs.1ce2e64c.png"
                />
                <img
                  alt="テレビ朝日のロゴ"
                  loading="lazy"
                  width="176"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_tvasahi"
                  src="https://static.bloomo.co.jp/_next/static/media/tvasahi.9952f969.png"
                />
                <img
                  alt="NewsPicksのロゴ"
                  loading="lazy"
                  width="183"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="styles_newspicks"
                  src="https://static.bloomo.co.jp/_next/static/media/newspicks.2683a113.png"
                />
                <img
                  alt="週刊東洋経済のロゴ"
                  loading="lazy"
                  width="166"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_toyokeizai"
                  src="https://static.bloomo.co.jp/_next/static/media/toyokeizai.1039170a.png"
                />
              </div>
            </div>

            <div className="styles_pressSectionSP">
              <div className="styles_press">
                <img
                  alt="日本経済新聞社のロゴ"
                  loading="lazy"
                  width="165"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_nikkei"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/nikkei.8094b509.png"
                />
                <img
                  alt="Forbesのロゴ"
                  loading="lazy"
                  width="143"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_forbes"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/forbes.9a2253d1.png"
                />
                <img
                  alt="ITmediaのロゴ"
                  loading="lazy"
                  width="139"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_itmedia"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/itmedia.39444495.png"
                />
              </div>
              <div className="styles_press">
                <img
                  alt="日経クロストレンドのロゴ"
                  loading="lazy"
                  width="189"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_xtrend"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/xtrend.17d72e8d.png"
                />
                <img
                  alt="日経トレンディのロゴ"
                  loading="lazy"
                  width="107"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_trendy"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/trendy.23f76d9e.png"
                />
                <img
                  alt="日経CNBCのロゴ"
                  loading="lazy"
                  width="65"
                  height="68"
                  decoding="async"
                  data-nimg="1"
                  className="styles_nikkei_cnbc"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/nikkei_cnbc.234b689d.png"
                />
              </div>
              <div className="styles_press">
                <img
                  alt="ASCIIのロゴ"
                  loading="lazy"
                  width="210"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_ascii"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/ascii.15925969.png"
                />
                <img
                  alt="WBSのロゴ"
                  loading="lazy"
                  width="115"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  className="styles_wbs"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/wbs.1ce2e64c.png"
                />
                <img
                  alt="テレビ朝日のロゴ"
                  loading="lazy"
                  width="176"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_tvasahi"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/tvasahi.9952f969.png"
                />
              </div>
              <div className="styles_press">
                <img
                  alt="NewsPicksのロゴ"
                  loading="lazy"
                  width="183"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="styles_newspicks"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/newspicks.2683a113.png"
                />
                <img
                  alt="週刊東洋経済のロゴ"
                  loading="lazy"
                  width="166"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="styles_toyokeizai"
                  style={{ color: "transaprent" }}
                  src="https://static.bloomo.co.jp/_next/static/media/toyokeizai.1039170a.png"
                />
              </div>
            </div>
          </div>

          <img
            className="styles_image"
            alt="ブルーモ画面イメージ"
            src="https://static.bloomo.co.jp/_next/static/media/image-about.a933c4f3.png"
            width="840"
            height="720"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
      <div className="styles_layout" style={{ marginBottom: 0 }}>
        <div className="styles_module_footer">
          <div>
            <h2 className="styles_heading_fs_40 styles_heading_fs_32">
              新しい時代の投資家になろう
            </h2>
          </div>
          <div className="mt_40 md:mt_60 lg:mt_40">
            <p
              className="mb_12 lg:mb_16 
            textStyle_jpLabel14 md:textStyle_jpLabel16 
            fw_bold text_accentBlue1 text-align_center"
            >
              約2分で口座開設申込み完了
            </p>
            <a aria-label="アプリをダウンロード" className="styles_button">
              アプリをダウンロード
            </a>
          </div>
          <a
            href="https://about.bloomo.co.jp/"
            className="styles_arrowLink styles_module_button"
            role="link"
          >
            ブルーモ証券についてもっと知る
          </a>
        </div>
        <footer className="styles_footer">
          <div className="styles_inner_footer">
            <div className="styles_mainNavigations">
              <span className="styles_heading_footer">
                Investment for Everyone.
              </span>
              <div className="styles_navigationTree">
                <h2 className="styles_navigationTreeLabel">Service</h2>
                <ul className="styles_navigations">
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/">トップ</a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/target-portfolio/">
                      目標ポートフォリオ
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/portfolio-sharing/">
                      ポートフォリオ共有
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/rebalancing/">リバランス</a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/nisa/">かんたんNISA</a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/fee-and-comparison/">
                      手数料と比較
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.zendesk.com/hc/ja" target="_blank">
                      よくある質問
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/campaign/">キャンペーン</a>
                  </li>
                </ul>
              </div>
              <div className="styles_navigationTree">
                <h2 className="styles_navigationTreeLabel">Learn</h2>
                <ul className="styles_navigations">
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/learn/">投資を学ぶ</a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/learn/library/">
                      ライブラリー
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://bloomo.co.jp/learn/glossary/">用語集</a>
                  </li>
                </ul>
              </div>
              <div className="styles_navigationTree">
                <h2 className="styles_navigationTreeLabel">Company</h2>
                <ul className="styles_navigations">
                  <li className="styles_navigationItem">
                    <a href="https://careers.bloomo.co.jp/">採用情報</a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://about.bloomo.co.jp/">
                      ブルーモ証券について
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://about.bloomo.co.jp/company/">会社概要</a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://about.bloomo.co.jp/newsroom/">ニュース</a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://about.bloomo.co.jp/disclosures/">
                      開示情報
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://about.bloomo.co.jp/contact/">
                      お問い合わせ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="styles_subNavigations">
              <div className="styles_navigationTree">
                <h2 className="styles_navigationTreeLabel">
                  Terms &amp; Conditions
                </h2>
                <ul className="styles_navigations">
                  <li className="styles_navigationItem">
                    <a
                      href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/b8cb1970cc954cc8835a9deeb923ab7f/%E5%8F%96%E5%BC%95%E7%B4%84%E6%AC%BE_v20241001.pdf"
                      target="_blank"
                    >
                      取引約款
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a
                      href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/b5b75c19f879461c82bdab22163e9c01/%E4%B8%8A%E5%A0%B4%E6%9C%89%E4%BE%A1%E8%A8%BC%E5%88%B8%E7%AD%89%E6%9B%B8%E9%9D%A2%E3%83%BB%E5%A5%91%E7%B4%84%E7%B7%A0%E7%B5%90%E5%89%8D%E4%BA%A4%E4%BB%98%E6%9B%B8%E9%9D%A2_v20241101.pdf"
                      target="_blank"
                    >
                      上場有価証券等書面・契約締結前交付書面
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a
                      href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/be78343c5a4a4f38ad31c545c13c418d/20240425_%E3%81%8A%E5%AE%A2%E6%A7%98%E6%9C%AC%E4%BD%8D%E3%81%AE%E6%A5%AD%E5%8B%99%E9%81%8B%E5%96%B6%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E5%9F%BA%E6%9C%AC%E6%96%B9%E9%87%9D.pdf"
                      target="_blank"
                    >
                      お客様本位の業務運営に関する基本方針
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a
                      href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/81b576e854f041548935b7d2a713f952/20230728_%E5%80%AB%E7%90%86%E3%82%B3%E3%83%BC%E3%83%88%E3%82%99.pdf"
                      target="_blank"
                    >
                      倫理コード
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a
                      href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/4abe8d4bac2c4adaafcc58b42f0cb5c2/20230728_%E5%8B%A7%E8%AA%98%E6%96%B9%E9%87%9D.pdf"
                      target="_blank"
                    >
                      勧誘方針
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a
                      href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/99ab243f00cd4b8081017c4f86890673/20230728_%E5%88%A9%E7%9B%8A%E7%9B%B8%E5%8F%8D%E7%AE%A1%E7%90%86%E6%96%B9%E9%87%9D.pdf"
                      target="_blank"
                    >
                      利益相反管理方針
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a
                      href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/563af37f0c9c42a8bf0ae7f56fe426cd/20230728_%E5%8F%8D%E7%A4%BE%E4%BC%9A%E5%8B%A2%E5%8A%9B%E3%81%AB%E5%AF%BE%E3%81%99%E3%82%8B%E5%9F%BA%E6%9C%AC%E6%96%B9%E9%87%9D.pdf"
                      target="_blank"
                    >
                      反社会的勢力への対応に関する基本方針
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a
                      href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/77d15167cccf4f7291f576692aabbb3e/%E5%8F%A3%E5%BA%A7%E9%96%8B%E8%A8%AD%E5%9F%BA%E6%BA%96.pdf"
                      target="_blank"
                    >
                      口座開設基準
                    </a>
                  </li>
                </ul>
              </div>
              <div className="styles_navigationTree">
                <ul className="styles_navigations">
                  <li className="styles_navigationItem">
                    <a href="https://about.bloomo.co.jp/privacy/">
                      プライバシーポリシー
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://files.microcms-assets.io/assets/ed1e84d736a84f6aae09d74d909ee51c/859d23785d4f47c78abb5a93847fc430/20231129_%E3%82%B5%E3%83%BC%E3%83%92%E3%82%99%E3%82%B9%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84.pdf">
                      サービス利用規約
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://about.bloomo.co.jp/risk/">
                      取引に関するリスク
                    </a>
                  </li>
                </ul>
              </div>
              <div className="styles_navigationTree">
                <h2 className="styles_navigationTreeLabel">
                  <a href="https://bloomo.co.jp/">
                    <img
                      alt="ブルーモ｜長期資産形成に特化した証券会社"
                      loading="lazy"
                      width="120"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="https://static.bloomo.co.jp/_next/static/media/logo-black.37112d8d.svg"
                    />
                  </a>
                </h2>
                <ul className="styles_navigations">
                  <li className="styles_navigationItem">
                    <a href="https://x.com/Bloomo_invest" target="_blank">
                      X
                    </a>
                  </li>
                  <li className="styles_navigationItem">
                    <a href="https://note.com/bloomo/" target="_blank">
                      note
                    </a>
                  </li>
                </ul>
              </div>
              <p className="styles_copyright">© 2024 Bloomo Securities Inc.</p>
            </div>
          </div>
          <p className="styles_notation">
            <span className="styles_module_notation">
              ブルーモ証券株式会社｜
            </span>
            <span className="styles_module_notation">
              金融商品取引業者 関東財務局長（金商）第3384号｜
            </span>
            加入協会：日本証券業協会
          </p>
        </footer>
        <div className="styles_container styles_appDownloadBanner styles_containerVisible">
          <div className="styles_content">
            <img
              alt="Bloomoアプリアイコン"
              loading="lazy"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="styles_appIcon"
              style={{ color: "transparent" }}
              src="https://static.bloomo.co.jp/_next/static/media/app-icon.65a22f97.png"
            />
            <p className="styles_message">
              みんなの投資から学べる
              <br />
              米国株資産運用
            </p>
            <a className="styles_downloadButton styles_button styles_small">
              ダウンロード
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
