export class Ong {
  constructor(
    private readonly city: string,
    public readonly email: string,
    private readonly name: string,
    private readonly uf: string,
    private readonly whatsApp: number,
    public readonly id: string
  ) {}
}
