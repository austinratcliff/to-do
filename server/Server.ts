import express, { Express, Request, Response } from 'express'
import path from 'path'

export class Server {
  private app: Express

  constructor(app: Express) {
    this.app = app

    this.app.use(express.json())
    this.app.use(express.static(path.resolve('./') + '/build/client'))

    this.app.get('/api', (request: Request, response: Response): void => {
      response.send('Hello from the API!')
    })

    this.app.get('*', (request: Request, response: Response): void => {
      response.sendFile(path.resolve('./') + '/build/client/index.html')
    })
  }

  public start(port: number): void {
    this.app.listen(port, () =>
      console.log(`Server listening on port ${port}!`)
    )
  }
}
