import generateUniqueId from '../../src/util/generateUniqueId.js'

describe('Generate unique ID', () => {
  it('deve gerar um ID unico de 8 caracteres', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
