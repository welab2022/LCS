package models

type User struct {
	Email     string `json:"email"`
	Name      string `json:"name"`
	Password  string `json:"password"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
	Enabled   bool   `json:"enabled"`
}
