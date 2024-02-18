const db = require('../utils/db');

class Product {
    static async createProduct(product) {
        const [result] = await db.execute(
            'INSERT INTO products (title, subtitle, properties, ingredients, note, howtouse, price, discounted_price, active_status, available_quantity, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [product.title, product.subtitle, JSON.stringify(product.properties), JSON.stringify(product.ingredients), JSON.stringify(product.note), JSON.stringify(product.howtouse), product.price, product.discounted_price, product.active_status, product.available_quantity, product.image]
        );

        return result.insertId;
    }

    static async getAllProducts() {
        const [rows] = await db.execute('SELECT * FROM products');
        return rows;
    }

    static async getProductById(productId) {
        const [rows] = await db.execute('SELECT * FROM products WHERE product_id = ?', [productId]);
        return rows[0];
    }

    static async updateProductById(productId, product) {
        await db.execute(
            'UPDATE products SET title=?, subtitle=?, properties=?, ingredients=?, note=?, howtouse=?, price=?, discounted_price=?, active_status=?, available_quantity=?, image=? WHERE product_id=?',
            [product.title, product.subtitle, JSON.stringify(product.properties), JSON.stringify(product.ingredients), JSON.stringify(product.note), JSON.stringify(product.howtouse), product.price, product.discounted_price, product.active_status, product.available_quantity, product.image, productId]
        );
    }

    static async deleteProductById(productId) {
        await db.execute('DELETE FROM products WHERE product_id = ?', [productId]);
    }
}

module.exports = Product;
