from typing import Optional
from datetime import datetime

class User:
    def __init__(
        self,
        name: str,
        email: str,
        password: str,
        id: str,
        created_at: Optional[datetime] = None,
        updated_at: Optional[datetime] = None
    ):
        self.id = id
        self.name = name
        self.email = email
        self.password = password
        self.created_at = created_at
        self.updated_at = updated_at
