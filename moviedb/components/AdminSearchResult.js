import React from 'react'
import Admin from '../pages/admin'
import styles from './AdminSearchResult.module.css';
import { Button, Card, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { userInfo } from 'os';
function AdminSearchResult({ user }) {
    return (
        <div
            // key={user.id} 
            class={styles.main}>
            <div class={styles.colOne}>
                <div class={styles.username}>
                    {/* {user.username} */}
                    username
                </div>
                <div class={styles.delBtn}>
                    <Button color="danger">Delete User</Button>
                </div>
            </div>
            <div class={styles.colTwo}
            //  key={reviewId}
            >
                <div class={styles.reviewContainer}>
                    <div class={styles.reviewRow}>
                        <div class={styles.reviewColOne}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                        </div>
                        <div class={styles.reviewColTwo}>
                            <Button color="danger">Delete</Button>
                        </div>
                    </div>
                    <div class={styles.reviewRow}>
                        <div class={styles.reviewColOne}>review text</div>
                        <div class={styles.reviewColTwo}>
                            <Button color="danger">Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSearchResult