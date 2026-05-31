CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT,
    estado TEXT NOT NULL
        CHECK (
            estado IN (
                'EM_FILA',
                'EM_EXECUCAO',
                'CONCLUIDA'
            )
        )
        DEFAULT 'EM_FILA',
    prioridade TEXT NOT NULL
        CHECK (
            prioridade IN (
                'BAIXA',
                'MEDIA',
                'ALTA'
            )
        )
        DEFAULT 'MEDIA',
    dataCriacao TEXT NOT NULL
);