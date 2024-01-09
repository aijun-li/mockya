-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Matcher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "default" BOOLEAN NOT NULL DEFAULT false,
    "delay" INTEGER NOT NULL DEFAULT 0,
    "ruleId" INTEGER NOT NULL,
    "mockId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Matcher_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rule" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Matcher_mockId_fkey" FOREIGN KEY ("mockId") REFERENCES "Mock" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Matcher" ("createdAt", "default", "id", "mockId", "ruleId", "updatedAt") SELECT "createdAt", "default", "id", "mockId", "ruleId", "updatedAt" FROM "Matcher";
DROP TABLE "Matcher";
ALTER TABLE "new_Matcher" RENAME TO "Matcher";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
