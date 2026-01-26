-- Создание таблицы для хранения лидов с сайта
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    form_type VARCHAR(50) NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    message TEXT,
    tour_dates VARCHAR(100),
    guests_count INTEGER,
    expectations TEXT[],
    experience TEXT,
    questions TEXT,
    contact_info VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT
);

-- Создание индексов для быстрого поиска
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_form_type ON leads(form_type);
CREATE INDEX idx_leads_email ON leads(email);

-- Комментарии к таблице и полям
COMMENT ON TABLE leads IS 'Лиды и контакты с сайта арт-туров';
COMMENT ON COLUMN leads.form_type IS 'Тип формы: contact, booking, expectations';
COMMENT ON COLUMN leads.tour_dates IS 'Выбранные даты тура (для форм бронирования)';
COMMENT ON COLUMN leads.guests_count IS 'Количество участников (для форм бронирования)';
COMMENT ON COLUMN leads.expectations IS 'Массив ожиданий от тура';
COMMENT ON COLUMN leads.contact_info IS 'Телефон или Telegram для связи (из формы ожиданий)';