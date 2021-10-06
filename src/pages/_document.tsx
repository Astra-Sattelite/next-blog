/* eslint-disable @typescript-eslint/no-explicit-any */
import NextDocument from "next/document"
import { ServerStyleSheet } from "styled-components"
import React from "react"

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () => originalRenderPage({
      enchanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    })
    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    }
  }
}